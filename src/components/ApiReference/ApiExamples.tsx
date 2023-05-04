import React, { useMemo, useContext, useEffect } from "react";
import { useFormikContext } from "formik";
import mapValues from "lodash/mapValues";
import omitBy from "lodash/omitBy";
import isPlainObject from "lodash/isPlainObject";
import qs from "qs";
import { Path } from "path-parser";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { useLocation, useHistory } from "@docusaurus/router";
import { ApiReferenceProps, FormValues } from ".";
import { ApiReferenceTokenContext } from "./ApiReferenceToken";
import usePageState from "@site/src/hooks/usePageState";
import camelToSnakeCase from "@site/utils/camelToSnakeCase.mts";
import snakeToCamelCase from "@site/utils/snakeToCamelCase.mts";

const INDENT_LENGTH = 2;
const STORAGE_EXAMPLE_TAB_KEY = "API_REFERENCE_EXAMPLE_TAB";

const escapeChar = (str: string, char: string) =>
  str.replace(new RegExp(`(?:\\\\)?(${char})`, "g"), "\\$1");

const buildTemplate = (lines: Array<string | null>) =>
  lines.filter((line) => line != null).join("\n");

const line = (str: string, indent = 0) =>
  `${" ".repeat(indent * INDENT_LENGTH)}${str}`;

export const stringifyJSON = (obj: object, pretty = false) =>
  JSON.stringify(obj, null, pretty ? INDENT_LENGTH : undefined);

const tabs = [
  {
    lang: "node",
    langCode: "js",
    title: "Node.js",
    template: ({ method, url, auth, body, authField }) =>
      buildTemplate([
        line("// Dependencies to install:"),
        line("// $ npm install node-fetch --save"),
        line(`// add "type": "module" to package.json`),
        line(""),
        line("import fetch from 'node-fetch';"),
        line(""),
        line("const options = {"),
        line(`method: '${method}',`, 1),
        line("headers: {", 1),
        line(`accept: 'application/json'${auth || body ? "," : ""}`, 2),
        body
          ? line(`'content-type': 'application/json'${auth ? "," : ""}`, 2)
          : null,
        auth ? line(`'${authField}': '${auth}'`, 2) : null,
        line("},", 1),
        body
          ? line(
              `body: JSON.stringify(${stringifyJSON(body, true)})`,
              1
            ).replace(/\n/g, `\n${" ".repeat(INDENT_LENGTH)}`)
          : null,
        line("};"),
        line(""),
        line(`fetch('${url}', options)`),
        line(".then(response => response.json())", 1),
        line(".then(response => console.log(response))", 1),
        line(".catch(err => console.error(err));", 1),
      ]),
  },
  {
    lang: "python",
    langCode: "python",
    title: "Python",
    template: ({ method, url, auth, body, authField }) =>
      buildTemplate([
        line("# Dependencies to install:\n"),
        line("# $ python -m pip install requests"),
        line(""),
        line("import requests"),
        line(""),
        line(`url = "${url}"`),
        line(""),
        body ? line(`payload = ${stringifyJSON(body, true)}`) : null,
        line("headers = {"),
        line(`"Accept": "application/json"${auth || body ? "," : ""}`, 1),
        body
          ? line(`"Content-Type": "application/json"${auth ? "," : ""}`, 1)
          : null,
        auth ? line(`"${authField}": "${auth}"`, 1) : null,
        line(`}`),
        line(""),
        line(
          `response = requests.request("${method}", url, ${
            body ? "json=payload, " : ""
          }headers=headers)`
        ),
        line(""),
        line("print(response.text)"),
      ]),
  },
  {
    lang: "bash",
    langCode: "bash",
    title: "cURL",
    template: ({ method, url, auth, body, authField }) => {
      const indent = " ".repeat("curl ".length);

      return buildTemplate([
        line(`curl --request ${method} \\`),
        line(`${indent}--url '${url}' \\`),
        line(
          `${indent}--header 'accept: application/json' ${
            body || auth ? "\\" : ""
          }`
        ),
        auth
          ? line(
              `${indent}--header '${authField}: ${auth}' ${body ? "\\" : ""}`
            )
          : null,
        body
          ? line(`${indent}--header 'content-type: application/json' \\`)
          : null,
        body ? line(`${indent}--data '`) : null,
        body ? line(stringifyJSON(body, true)) : null,
        body ? line("'") : null,
      ]);
    },
  },
  {
    lang: "go",
    langCode: "go",
    title: "Go",
    template: ({ method, url, auth, body, authField }) =>
      buildTemplate([
        line("package main"),
        line(""),
        line("import ("),
        line('"fmt"', 1),
        body ? line('"strings"', 1) : null,
        line('"net/http"', 1),
        line('"io/ioutil"', 1),
        line(")"),
        line(""),
        line("func main() {"),
        line(""),
        line(`url := "${url}"`, 1),
        line(""),
        body
          ? line(
              `payload := strings.NewReader("${escapeChar(
                stringifyJSON(body),
                '"'
              )}")`,
              1
            )
          : null,
        body ? line("") : null,
        line(`req, _ := http.NewRequest("${method}", url, payload)`, 1),
        line(""),
        line('req.Header.Add("Accept", "application/json")', 1),
        body
          ? line('req.Header.Add("Content-Type", "application/json")', 1)
          : null,
        auth ? line(`req.Header.Add("${authField}", "${auth}")`, 1) : null,
        line(""),
        line("res, _ := http.DefaultClient.Do(req)", 1),
        line(""),
        line("defer res.Body.Close()", 1),
        line("body, _ := ioutil.ReadAll(res.Body)", 1),
        line(""),
        line("fmt.Println(res)", 1),
        line("fmt.Println(string(body))", 1),
        line(""),
        line("}"),
      ]),
  },
  {
    lang: "php",
    langCode: "php",
    title: "PHP",
    template: ({ method, url, auth, body, authField }) =>
      buildTemplate([
        line("<?php"),
        line("// Dependencies to install:"),
        line("// $ composer require guzzlehttp/guzzle"),
        line(""),
        line("require_once('vendor/autoload.php');"),
        line(""),
        line("$client = new \\GuzzleHttp\\Client();"),
        line(""),
        line(`$response = $client->request('${method}', '${url}', [`),
        body
          ? line(`'body' => '${escapeChar(stringifyJSON(body), "'")}',`, 1)
          : null,
        line("'headers' => [", 1),
        line("'Accept' => 'application/json',", 2),
        auth ? line(`'${authField}' => '${auth}',`, 2) : null,
        body ? line("'Content-Type' => 'application/json',", 2) : null,
        line("],", 1),
        line("]);"),
        line(""),
        line("echo $response->getBody();"),
      ]),
  },
];

// Used to filter out the fields that are empty in the example body JSON
export const filterOutEmpty = (value: any) => {
  /**
   * This is temporary solution for fixing
   * Auth API adding additional `\` on special
   * characters. This applies to:
   * - verifyChallengeEvm
   * - verifyChallengeSolana
   */
  if (value?.message)
    value = { ...value, message: value.message.replaceAll("\\n", "\n") };

  if (Array.isArray(value)) {
    const cleanArray = value
      .map((item) => filterOutEmpty(item))
      .filter((item) => item != null);
    return cleanArray.length === 0 ? undefined : cleanArray;
  }

  if (isPlainObject(value)) {
    const cleanObject = Object.entries(value)?.reduce((obj, [key, value]) => {
      const cleanValue = filterOutEmpty(value);
      return cleanValue == null ? obj : { ...obj, [key]: cleanValue };
    }, {});

    return Object.keys(cleanObject).length === 0 ? undefined : cleanObject;
  }

  return value;
};

export const formatParamsByLang = (params: any, lang: string) => {
  for (const key of Object.keys(params)) {
    let formattedKey = "";
    switch (lang) {
      case "node":
        formattedKey = snakeToCamelCase(key);
        break;
      case "python":
        formattedKey = camelToSnakeCase(key).replace("-", "_");
        break;
      default:
        break;
    }

    if (key !== formattedKey) {
      params[formattedKey] = params[key];
      delete params[key];
      // Handling hex chain values for NodeJS SDK
    } else if (formattedKey === "chain" && lang === "node") {
      params.chain = (() => {
        const { chain } = params ?? {};
        switch (chain) {
          case "eth":
            return "0x1";
          case "goerli":
            return "0x5";
          case "sepolia":
            return "0xaa36a7";
          case "polygon":
            return "0x89";
          case "mumbai":
            return "0x13881";
          case "bsc":
            return "0x38";
          case "bsc testnet":
            return "0x61";
          case "avalanche":
            return "0xa86a";
          case "avalanche testnet":
            return "0xa869";
          case "fantom":
            return "0xfa";
          case "palm":
            return "0x2a15c308d";
          case "cronos":
            return "0x19";
          case "cronos testnet":
            return "0x152";
          case "arbitrum":
            return "0xa4b1";
          default:
            return chain;
        }
      })();
    }
  }

  return params;
};

const customNodeSdkBody = (code: string, body: any) => {
  // For `requestChallengeEvm` and `requestChallengeSolana`
  if (code.includes("requestMessage")) {
    const { chainId, network } = body ?? {};
    if (chainId) {
      return {
        chain: `0x${parseInt(chainId).toString(16)}`,
        chainId: undefined,
        networkType: "evm",
      };
    } else if (network) {
      return {
        solNetwork: network,
        networkType: "solana",
      };
    }
  }
};

/**
 * @description – Only for NodeJS & Python Moralis SDK codes
 *
 * @param code
 * @param lang
 * @param params
 * @param auth
 * @returns
 */
export const injectParamsToCode = (
  code: string,
  lang: string,
  params: any,
  auth: string,
  network: string,
  aptosNetwork?: "mainnet" | "testnet"
) => {
  const { query = {}, path = {}, body = {} } = params ?? {};
  switch (lang) {
    case "node":
      return code
        .replace(
          "{}",
          stringifyJSON(
            {
              ...formatParamsByLang({ ...query }, lang),
              ...formatParamsByLang({ ...path }, lang),
              ...formatParamsByLang({ ...body }, lang),
              ...customNodeSdkBody(code, body),
              ...(network === "aptos" ? { network: aptosNetwork } : {}),
            },
            true
          ).replace(/\n/g, `\n${" ".repeat(INDENT_LENGTH)}`)
        )
        .replace(/YOUR_API_KEY/, auth);
    case "python":
    default:
      return code
        .replace(
          "{}",
          stringifyJSON(
            {
              ...formatParamsByLang({ ...query }, lang),
              ...formatParamsByLang({ ...path }, lang),
              ...(network === "aptos" ? { network: aptosNetwork } : {}),
            },
            true
          )
        )
        .replace(
          "[]",
          stringifyJSON({ ...formatParamsByLang({ ...body }, lang) }, true)
        )
        .replace(/YOUR_API_KEY/, auth);
  }
};

const objectToQueryParams = (params) => {
  return (
    "?" +
    Object.keys(params)
      .map((key) => {
        const value = params[key];
        if (value !== null && value !== undefined) {
          const serializedValue =
            typeof value === "object"
              ? JSON.stringify(value)
              : encodeURIComponent(value);
          return `${encodeURIComponent(key)}=${serializedValue}`;
        }

        return null;
      })
      .filter((value) => {
        return value !== null && value !== undefined;
      })
      .join("&")
  );
};

const ApiExamples = ({
  method,
  apiHost,
  path,
  codeSamples,
  aptosNetwork,
}: Pick<
  ApiReferenceProps,
  "method" | "apiHost" | "path" | "codeSamples" | "aptosNetwork"
>) => {
  const { values } = useFormikContext<FormValues>();
  const { token } = useContext(ApiReferenceTokenContext);
  const { network } = usePageState();
  const history = useHistory();

  const defaultPathParams = useMemo(
    () => mapValues(values.path, (_: any, key: number) => `:${key}`),
    []
  );

  const formattedValuesForQueryPath = useMemo(() => {
    const { body, path, query } = values ?? {};

    return {
      ...body,
      ...path,
      ...query,
    };
  }, [values]);

  useEffect(() => {
    const newQueryParams = objectToQueryParams(formattedValuesForQueryPath);
    history.replace({ search: newQueryParams });
  }, [formattedValuesForQueryPath]);

  return (
    <Tabs groupId={STORAGE_EXAMPLE_TAB_KEY}>
      {tabs.map(({ lang, langCode, template, title }, index) => {
        const { code = "" } =
          codeSamples?.find((sample) => sample?.language === lang) ?? {};
        const auth = token.length > 0 ? token : "YOUR_API_KEY";
        return (
          <TabItem key={index} value={lang} label={title}>
            <CodeBlock className={`language-${langCode}`}>
              {code
                ? buildTemplate([
                    line(
                      injectParamsToCode(
                        code,
                        lang,
                        values,
                        auth,
                        network,
                        aptosNetwork
                      )
                    ),
                  ])
                : template({
                    method,
                    url: [
                      apiHost,
                      new Path(path).build(
                        {
                          ...defaultPathParams,
                          ...omitBy(values.path, (value) => value == null),
                        },
                        {
                          urlParamsEncoding: "uriComponent",
                        }
                      ),
                      qs.stringify(values.query || {}, {
                        addQueryPrefix: true,
                      }),
                    ].join(""),
                    auth: auth,
                    body:
                      // temporary fix for runContractFunction
                      path === "/:address/function"
                        ? values.body
                        : filterOutEmpty(values.body),
                    authField: "X-API-Key",
                  })}
            </CodeBlock>
          </TabItem>
        );
      })}
    </Tabs>
  );
};

export default ApiExamples;

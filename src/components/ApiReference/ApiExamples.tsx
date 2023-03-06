import React, { useMemo, useContext } from "react";
import { useFormikContext } from "formik";
import mapValues from "lodash/mapValues";
import omitBy from "lodash/omitBy";
import isPlainObject from "lodash/isPlainObject";
import qs from "qs";
import { Path } from "path-parser";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import { ApiReferenceProps, FormValues } from ".";
import { ApiReferenceTokenContext } from "./ApiReferenceToken";

const INDENT_LENGTH = 2;
const STORAGE_EXAMPLE_TAB_KEY = "API_REFERENCE_EXAMPLE_TAB";

const escapeChar = (str: string, char: string) =>
  str.replace(new RegExp(`(?:\\\\)?(${char})`, "g"), "\\$1");

const buildTemplate = (lines: Array<string | null>) =>
  lines.filter((line) => line != null).join("\n");

const line = (str: string, indent: number = 0) =>
  `${" ".repeat(indent * INDENT_LENGTH)}${str}`;

export const stringifyJSON = (obj: object, pretty: boolean = false) =>
  JSON.stringify(obj, null, pretty ? INDENT_LENGTH : undefined);

const tabs = [
  {
    lang: "node",
    langCode: "js",
    title: "Node.js",
    template: ({ method, url, auth, body }) =>
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
        auth ? line(`'X-API-Key': '${auth}'`, 2) : null,
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
    template: ({ method, url, auth, body }) =>
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
        auth ? line(`"X-API-Key": "${auth}"`, 1) : null,
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
    template: ({ method, url, auth, body }) => {
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
          ? line(`${indent}--header 'X-API-Key: ${auth}' ${body ? "\\" : ""}`)
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
    template: ({ method, url, auth, body }) =>
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
        auth ? line(`req.Header.Add("X-API-Key", "${auth}")`, 1) : null,
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
    template: ({ method, url, auth, body }) =>
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
        auth ? line(`'X-API-Key' => '${auth}',`, 2) : null,
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

const ApiExamples = ({
  method,
  apiHost,
  path,
  codeSamples,
}: Pick<ApiReferenceProps, "method" | "apiHost" | "path" | "codeSamples">) => {
  const { values } = useFormikContext<FormValues>();
  const { token } = useContext(ApiReferenceTokenContext);

  const defaultPathParams = useMemo(
    () => mapValues(values.path, (value, key) => `:${key}`),
    []
  );

  return (
    <Tabs groupId={STORAGE_EXAMPLE_TAB_KEY}>
      {tabs.map(({ lang, langCode, template, title }, index) => {
        const { code } =
          codeSamples?.find((sample) => sample?.language === lang) ?? {};
        const auth = token.length > 0 ? token : "YOUR_API_KEY";
        return (
          <TabItem key={index} value={lang} label={title}>
            <CodeBlock className={`language-${langCode}`}>
              {code
                ? buildTemplate([line(code?.replace(/YOUR_API_KEY/, auth))])
                : template({
                    method,
                    url: [
                      apiHost,
                      new Path(path).build({
                        ...defaultPathParams,
                        ...omitBy(values.path, (value) => value == null),
                      }),
                      qs.stringify(values.query || {}, {
                        addQueryPrefix: true,
                      }),
                    ].join(""),
                    auth: auth,
                    body: filterOutEmpty(values.body),
                  })}
            </CodeBlock>
          </TabItem>
        );
      })}
    </Tabs>
  );
};

export default ApiExamples;

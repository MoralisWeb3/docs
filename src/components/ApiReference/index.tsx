import React, { useState, useCallback, useMemo, useContext } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import ReactMarkdown from "react-markdown";
import { Formik, Form, Field as FormikFieldComponent } from "formik";
import CodeBlock from "@theme/CodeBlock";
import Head from "@docusaurus/Head";
import qs from "qs";
import styles from "./styles.module.css";
import { ApiResponse, buildResponse } from "./ApiResponseField";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import ApiParamButton from "./ApiParamButton";
import ApiExamples, { stringifyJSON, filterOutEmpty } from "./ApiExamples";
import { ApiReferenceTokenContext } from "./ApiReferenceToken";
import makeMetaDescription from "@site/src/utils/makeMetaDescription";
import LoadingCircle from "@site/src/components/LoadingCircle";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PostBodyField from "./PostBodyField";
import HttpMethodBadge from "../HttpMethodBadge";
import StatusCodeBadge from "../StatusCodeBadge";
import { responseExamples } from "./responseExamples";
import { getEndpointMetadata } from "@site/src/utils/endpointMapping";

export interface CodeSample {
    language: "node" | "csharp" | "python";
    code: string;
    name?: string;
}

export interface ApiReferenceProps {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    path: string;
    description?: string;
    pathParams?: ApiParam[];
    queryParams?: ApiParam[];
    bodyParam?: ApiParam;
    responses: ApiResponse[];
    apiHost: string;
    testHost?: string;
    codeSamples?: CodeSample[];
    children?: React.ReactNode;
    aptosNetwork?: "mainnet" | "testnet";
    disabled?: boolean;
    apiCategory?: string; // e.g., "solana", "evm", "market-data"
    endpointName?: string; // e.g., "getNewTokensByExchange"
}

export interface FormValues {
    path: object;
    query: object;
    body: object;
}

const deepCompact = (value: unknown) => {
    if (Array.isArray(value)) {
        const array = value.map(deepCompact).filter((x) => x != null);

        return array.length === 0 ? undefined : array;
    }

    if (typeof value === "object" && value !== null) {
        const object = Object.fromEntries(
            Object.entries(value)
                .map(([key, value]) => [key, deepCompact(value)])
                .filter(([, value]) => value != null)
        );

        return Object.keys(object).length === 0 ? undefined : object;
    }

    return value;
};

function isValidJsonString(s) {
    try {
        JSON.parse(s);
        return true;
    } catch (e) {
        return false;
    }
}

const queryParamsToObject = (search) => {
    return search
        ? search
              .substring(1)
              .split("&")
              .reduce((acc, item) => {
                  const [key, value] = item.split("=");
                  const decodedValue = decodeURIComponent(value);

                  // Directly handle 'jsonrpc' to ensure it remains a fixed string
                  if (key === "jsonrpc") {
                      acc[key] = decodedValue; // Keep it as a string, no conversion
                  } else if (isValidJsonString(decodedValue)) {
                      acc[key] = JSON.parse(decodedValue);
                  } else {
                      acc[key] = decodedValue;
                  }

                  return acc;
              }, {})
        : {};
};

const ApiReference = ({
    description,
    method,
    path,
    pathParams,
    queryParams,
    bodyParam,
    responses,
    apiHost,
    testHost,
    codeSamples,
    children,
    disabled,
    apiCategory,
    endpointName,
}: ApiReferenceProps) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [responseIndex, setResponseIndex] = useState(0);
    const { siteConfig } = useDocusaurusContext();
    const { specialApiKey = [] } = siteConfig?.customFields ?? {};
    const { token, setToken } = useContext(ApiReferenceTokenContext);
    const [network, setNetwork] = useState<"mainnet" | "testnet">("mainnet");
    const hostUrl = useMemo(() => (network === "mainnet" ? apiHost : testHost), [network]);
    const location = useLocation();
    const initialQueryValues = queryParamsToObject(location.search);
    const currentPageUrl = `${
        typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
    }${location.pathname}${location.search}`;

    const handleResponseSelect = useCallback((event) => {
        setResponseIndex(+event.currentTarget.value);
    }, []);

    const execCallback = useCallback(
        async (values) => {
            setLoading(true);
            try {
                let pathReplace = path;

                // Replace path values (For example :address) in path
                for (const pathValue in values.path) {
                    if (values.path[pathValue]) {
                        pathReplace = pathReplace.replace(`:${pathValue}`, values.path[pathValue]);
                    }
                }

                // Check if there are still unresolved path parameters
                const unresolvedParams = pathReplace.match(/:[^/]+/g);
                if (unresolvedParams) {
                    throw new Error(
                        `Missing required path parameters: ${unresolvedParams.join(", ")}`
                    );
                }

                // Check if this is Cortex API
                const isCortexAPI = hostUrl?.includes("cortex-api.moralis.io");

                // Check if streaming was requested - don't even make the request
                const isStreamingRequest = values.body?.stream === true && isCortexAPI;

                if (isStreamingRequest) {
                    // Show message that streaming is not available in docs
                    const fetchBody = {
                        message:
                            "Streaming responses are not available in the documentation interface. Please use the API directly with your preferred client to test streaming functionality.",
                        note: "Set 'stream': true in your API request to enable streaming when using the API directly.",
                    };
                    setResponse({ status: 200, body: fetchBody });
                    setResponseIndex(-1);
                    setLoading(false);
                    return;
                }

                let response;

                // When user enters their own API key, make the request directly
                if (
                    token?.length > 0 ||
                    hostUrl === "https://api.moralis-streams.com" ||
                    hostUrl === "https://site1.moralis-nodes.com"
                ) {
                    let headers;

                    if (isCortexAPI) {
                        // Cortex API uses simple headers with X-API-Key
                        headers = {
                            accept: "application/json",
                            "content-type": "application/json",
                        };

                        // Add API key if user provided one
                        if (token) {
                            headers["X-API-Key"] = token;
                        }
                    } else {
                        // Other APIs use different auth headers
                        const authHeaderKey = hostUrl.includes("wdim.moralis.io")
                            ? "Authorization"
                            : "X-API-Key";
                        const authHeaderValue = hostUrl.includes("wdim.moralis.io")
                            ? `Bearer ${token}`
                            : token;

                        headers = {
                            accept: "application/json",
                            "content-type": "application/json",
                            "x-moralis-source": `Moralis API docs`,
                            referer: currentPageUrl,
                        };

                        // Only add auth header if token is available
                        if (token) {
                            headers[authHeaderKey] = authHeaderValue;
                        }
                    }

                    response = await fetch(
                        [
                            hostUrl,
                            pathReplace,
                            qs.stringify(values.query || {}, { addQueryPrefix: true }),
                        ].join(""),
                        {
                            method,
                            headers,
                            body: JSON.stringify(
                                // temporary fix for runContractFunction
                                path === "/:address/function"
                                    ? values.body
                                    : filterOutEmpty(values.body)
                            ),
                        }
                    );
                } else {
                    const currentDate = new Date();
                    const utcDay = currentDate.getUTCDate();
                    const utcMonth = currentDate.getUTCMonth() + 1;
                    // const utcHour = currentDate.getUTCHours();
                    const sumUtcDateMonth = utcDay + utcMonth;

                    const dynamicApiKey = `test${sumUtcDateMonth}`;
                    // Without user API key, make the request via the Vercel function
                    const proxyHeaders = isCortexAPI
                        ? {
                              accept: "application/json",
                              "content-type": "application/json",
                              // Backend will add the X-API-Key from env
                          }
                        : {
                              accept: "application/json",
                              "content-type": "application/json",
                              "X-API-Key": dynamicApiKey,
                              "x-moralis-source": `Moralis API docs`,
                              referer: currentPageUrl,
                          };

                    response = await fetch("/api/api-backend", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            hostUrl,
                            path: pathReplace,
                            method,
                            headers: proxyHeaders,
                            query: values.query || {},
                            body:
                                // temporary fix for runContractFunction
                                path === "/:address/function"
                                    ? values.body
                                    : filterOutEmpty(values.body),
                        }),
                    });
                }

                let fetchBody;
                if (path === "/nft/:address/sync" && response.status === 201) {
                    fetchBody = await response.text();
                } else {
                    fetchBody = await response.json();
                }

                const body = { status: response.status, body: fetchBody };

                setResponse(body);
                setResponseIndex(-1);
            } catch (error) {
                setResponse(null);
                setResponseIndex(-1);
            } finally {
                setLoading(false);
            }
        },
        [path, method, token]
    );

    const initialValues = useMemo(() => {
        ["utm_campaign", "utm_content", "utm_medium", "utm_source"].forEach(
            (e) => delete initialQueryValues[e]
        );
        if (Object.keys(initialQueryValues).length === 0) {
            const pathParam: ApiParam = pathParams && {
                type: "object",
                fields: pathParams,
            };
            const queryParam: ApiParam = queryParams && {
                type: "object",
                fields: queryParams,
            };

            // Create endpoint context for better default detection
            // Automatically extract endpoint name from the path if not provided
            const metadata = getEndpointMetadata(path);
            const endpointContext = {
                endpointName: endpointName || metadata.endpointName,
                apiCategory: apiCategory || metadata.apiCategory,
                fullPath: `${apiHost}${path}`,
            };

            return {
                path: pathParam && apiParamInitialValue(pathParam, endpointContext, "pathParams"),
                query:
                    queryParam && apiParamInitialValue(queryParam, endpointContext, "queryParams"),
                body: bodyParam && apiParamInitialValue(bodyParam, endpointContext, "bodyParam"),
            };
        } else {
            const path = {};
            const query = {};
            const body = bodyParam ? {} : undefined;
            // return {};
            for (const key in initialQueryValues) {
                if (pathParams?.some((item) => item?.name === key)) {
                    path[key] = initialQueryValues[key];
                } else if (queryParams?.some((item) => item?.name === key)) {
                    query[key] = initialQueryValues[key];
                } else if (bodyParam) {
                    body[key] = initialQueryValues[key];
                }
            }

            return {
                path,
                query,
                body,
            };
        }
    }, [bodyParam, pathParams, queryParams, initialQueryValues]);

    const onChangeToken = useCallback((event) => setToken(event.currentTarget.value), [setToken]);

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content={makeMetaDescription({
                        description: description,
                        path: path,
                    })}
                />
            </Head>
            <div>
                {apiHost && apiHost.includes("aptos") && (
                    <ToggleGroup.Root
                        className={styles.ToggleGroup}
                        type="single"
                        defaultValue="mainnet"
                        orientation="horizontal"
                        value={network}
                        onValueChange={(value: "mainnet" | "testnet") => {
                            if (value) setNetwork(value);
                        }}
                    >
                        <ToggleGroup.Item className={styles.ToggleGroupItem} value="mainnet">
                            Mainnet
                        </ToggleGroup.Item>
                        <ToggleGroup.Item className={styles.ToggleGroupItem} value="testnet">
                            Testnet
                        </ToggleGroup.Item>
                    </ToggleGroup.Root>
                )}
            </div>
            <Formik<FormValues> initialValues={initialValues} onSubmit={execCallback}>
                <Form autoComplete="off" className={styles.form} data-api-reference-form="true">
                    <div className="row row--no-gutters">
                        <div className="col col--5">
                            <div className={styles.url}>
                                <HttpMethodBadge method={method} />
                                {hostUrl}
                                {path}
                            </div>

                            {description && (
                                <div className={styles.section}>
                                    <ReactMarkdown>{String(description)}</ReactMarkdown>
                                </div>
                            )}
                            <div className={styles.section}>{children}</div>
                            {pathParams && pathParams.length > 0 && (
                                <div className={styles.section}>
                                    <div className={styles.sectionTitle}>PATH PARAMS</div>

                                    <div className={styles.group}>
                                        <ApiParamField
                                            param={{ type: "object", fields: pathParams }}
                                            prefix="path"
                                        />
                                    </div>
                                </div>
                            )}

                            {queryParams && queryParams.length > 0 && (
                                <div className={styles.section}>
                                    <div className={styles.sectionTitle}>QUERY PARAMS</div>

                                    <div className={styles.group}>
                                        <ApiParamField
                                            param={{ type: "object", fields: queryParams }}
                                            prefix="query"
                                        />
                                    </div>
                                </div>
                            )}

                            {bodyParam && (
                                <div className={styles.section}>
                                    <div className={styles.sectionTitle}>BODY PARAM</div>

                                    <div className={styles.group}>
                                        {method === "POST" || method === "PUT" ? (
                                            <FormikFieldComponent name="body">
                                                {(props) => (
                                                    <PostBodyField {...props} param={bodyParam} />
                                                )}
                                            </FormikFieldComponent>
                                        ) : (
                                            <ApiParamField param={bodyParam} prefix="body" />
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className={styles.section}>
                                <div className={styles.sectionTitle}>Responses</div>

                                <div className={styles.group}>
                                    {/* Render all responses (API-defined and examples) */}
                                    {[...(responses || []), ...Object.values(responseExamples)].map(
                                        (response, index) => {
                                            const isApiResponse = index < (responses?.length || 0);
                                            const hasBody =
                                                isApiResponse &&
                                                "body" in response &&
                                                response.body;

                                            return (
                                                <div key={index} className={styles.field}>
                                                    <div className={styles.fieldInfo}>
                                                        <div
                                                            className={styles.responseHeaderContent}
                                                        >
                                                            <StatusCodeBadge
                                                                status={response.status}
                                                            />
                                                            <span
                                                                className={
                                                                    styles.responseDescription
                                                                }
                                                            >
                                                                {response.description}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col col--7">
                            <div className={styles.runner}>
                                <div className={styles.inlineForm}>
                                    {hostUrl !== "https://site1.moralis-nodes.com" && (
                                        <>
                                            <div className={styles.sectionTitle}>API KEY</div>

                                            <input
                                                value={token}
                                                onChange={onChangeToken}
                                                placeholder="YOUR_API_KEY (Optional)"
                                                className={styles.input}
                                            />
                                        </>
                                    )}

                                    <ApiParamButton
                                        type="submit"
                                        disabled={
                                            !(specialApiKey as string[]).includes(token) &&
                                            (disabled || loading)
                                        }
                                        className={`${styles.apiParamButton} ${
                                            !(specialApiKey as string[]).includes(token) || disabled
                                                ? styles.apiParamButtonDisabled
                                                : ""
                                        }`}
                                        style={{
                                            width:
                                                hostUrl === "https://site1.moralis-nodes.com"
                                                    ? "100%"
                                                    : "initial",
                                        }}
                                    >
                                        {loading ? <LoadingCircle /> : "Test Live API"}
                                    </ApiParamButton>
                                </div>
                                <ApiExamples
                                    method={method}
                                    apiHost={hostUrl}
                                    path={path}
                                    aptosNetwork={network}
                                    codeSamples={codeSamples}
                                />

                                <div className={styles.section}>
                                    <div className={styles.inlineForm}>
                                        <div className={styles.sectionTitle}>
                                            Response {responseIndex !== -1 && "Example"}
                                        </div>
                                        <select
                                            value={responseIndex}
                                            className={styles.input}
                                            onChange={handleResponseSelect}
                                        >
                                            {responseIndex === -1 && (
                                                <option disabled value={-1}>
                                                    {response?.status} Test Request
                                                </option>
                                            )}

                                            {responses.map((response, index) => (
                                                <option key={index} value={index}>
                                                    {response.status} {response.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <CodeBlock className="language-json">
                                        {responseIndex === -1
                                            ? response
                                                ? JSON.stringify(response.body, null, 2)
                                                : "Fetch response error"
                                            : responses[responseIndex].body
                                            ? stringifyJSON(
                                                  deepCompact(
                                                      buildResponse(responses[responseIndex].body)
                                                  ),
                                                  true
                                              )
                                            : "Empty"}
                                    </CodeBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default ApiReference;

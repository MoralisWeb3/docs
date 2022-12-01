import React, { useEffect, useState } from "react";
import qs from "qs";

const STORAGE_AUTH_KEY = "API_REFERENCE_AUTH_KEY";
const STORAGE_SSO_AUTH_KEY = "API_REFERENCE_SSO_AUTH_KEY";

interface ApiReferenceTokenContextProps {
  ssoToken: string;
  token: string;
  setToken: (token: string) => void;
}

export const ApiReferenceTokenContext = React.createContext<ApiReferenceTokenContextProps>({
  ssoToken: "",
  token: "",
  setToken: () => {},
});

export const ApiReferenceTokenProvider = (props: React.PropsWithChildren<{}>) => {
  const [token, setToken] = useState("");
  const [ssoToken, setSsoToken] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem(STORAGE_AUTH_KEY);

    if (auth) setToken(auth);
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem(STORAGE_SSO_AUTH_KEY);

    if (auth) setSsoToken(auth);
  }, []);

  useEffect(() => {
    const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    if (!queryParams.auth_token) return;

    fetch("/docs/api/auth", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: queryParams.auth_token }),
    })
      .then((response) => {
        if (!response.ok) throw new Error();

        return response.json();
      })
      .then((body) => {
        setToken(body.token);
        setSsoToken(body.token);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_AUTH_KEY, token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem(STORAGE_SSO_AUTH_KEY, ssoToken);
  }, [ssoToken]);

  return <ApiReferenceTokenContext.Provider {...props} value={{ ssoToken, token, setToken }} />;
};

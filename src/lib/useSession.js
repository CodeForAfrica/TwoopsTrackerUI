import jwt from "jwt-decode";
import React from "react";
import useSWR from "swr";

import { getSessionItem, setSessionItem } from "./sessionStorage";

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

/**
 *
 *  get the token from storage check if token is valid return true if not check if refesh token is valid if valid, referesh acessToken  if refersh fails or token isnt valid return false
 * @returns
 */
export default function useSession() {
  const refreshToken = getSessionItem("refreshToken");
  const accessToken = getSessionItem("accessToken");
  const { data, error } = useSWR("/api/refresh", fetcher);

  const [session, setSession] = React.useState([false, true]);

  React.useEffect(() => {
    if (!(accessToken && refreshToken)) {
      setSession([false, false]);
    } else {
      const decodedAccess = jwt(accessToken);
      if (decodedAccess.exp < Date.now() / 1000) {
        const refeshDecoded = jwt(refreshToken);
        if (refeshDecoded.exp < Date.now() / 1000) {
          setSession([false, false]);
        }
        if (!error && data) {
          setSessionItem("accessToken", data);
          setSession([data, true]);
        }
        setSession([false, true]);
      }
      setSession([decodedAccess, false]);
    }
  }, [refreshToken, accessToken, data, error]);

  return session;
}

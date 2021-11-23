import { useSession } from "next-auth/client";
import useSWR from "swr";

import fetchJson from "@/twoopstracker/utils/fetchJson";

function useTweets(shouldFetch) {
  const [session] = useSession();
  const fetcher = (url) => {
    return fetchJson(url, session);
  };
  const { data, error } = useSWR(shouldFetch, fetcher);

  return {
    data,
    isLoading: shouldFetch() && !(error || data),
    isError: error,
  };
}

export default useTweets;

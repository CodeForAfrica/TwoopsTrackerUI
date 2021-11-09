import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

function useTweets(shouldFetch) {
  const { data, error } = useSWR(shouldFetch, fetcher);

  return {
    tweets: data,
    isLoading: shouldFetch() && !(error || data),
    isError: error,
  };
}

export default useTweets;

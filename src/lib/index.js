const url = process.env.NEXT_PUBLIC_TWOOPSTRACKER_API_URL;

export const fetchTweets = async () => {
  const res = await fetch(`${url}/tweets/`);
  const data = await res.json();

  return data;
};

export const fetchLists = () => {
  console.log("Fetch Lists", url);
};

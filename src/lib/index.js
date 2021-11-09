import { searchTweets, fetchAllTweets } from "@/twoopstracker/pages/api";

export const fetchTweets = async () => {
  const data = await fetchAllTweets();

  return data;
};

export const fetchSearchTweets = async (search, date, theme, location) => {
  const data = await searchTweets(search, date, theme, location);

  return data;
};

import { subDays } from "date-fns";

const BASE_URL = process.env.TWOOPSTRACKER_API_URL;

export async function fetchJson(url) {
  const res = await fetch(url);
  return res.json();
}

async function fetchTweets({ query, location, days = 7, page, pageSize }) {
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (location) {
    searchParams.append("location", location);
  }
  if (page) {
    searchParams.append("page", page);
  }
  if (pageSize) {
    searchParams.append("page_size", pageSize);
  }
  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, days).toISOString().substr(0, 10);
  searchParams.append("startDate", startDate);
  searchParams.append("endDate", endDate);

  const searchUrl = `${BASE_URL}/tweets/?${searchParams.toString()}&format=json`;
  const results = await fetchJson(searchUrl);

  searchParams.append("get_all", true);
  const allTweetsUrl = `${BASE_URL}/tweets/?${searchParams.toString()}&format=json`;
  const allTweets = await fetchJson(allTweetsUrl);

  return { tweets: results, allTweets };
}

export async function tweets(searchQuery = {}) {
  const {
    query: term,
    theme,
    location,
    days: daysAsString,
    page,
    pageSize,
  } = searchQuery;
  let query = term || theme;
  if (query && theme) {
    query = `(${query} AND ${theme})`;
  }
  let days = parseInt(daysAsString, 10) || undefined;
  if (days > 30) {
    days = 30;
  }
  return fetchTweets({ query, location, days, page, pageSize });
}

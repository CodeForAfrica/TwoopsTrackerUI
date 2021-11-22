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
  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, days).toISOString().substr(0, 10);
  searchParams.append("start_date", startDate);
  searchParams.append("end_date", endDate);
  if (page) {
    searchParams.append("page", page);
  }
  if (pageSize) {
    searchParams.append("page_size", pageSize);
  }
  searchParams.append("format", "json");

  const searchUrl = `${BASE_URL}/tweets/?${searchParams.toString()}`;
  return fetchJson(searchUrl);
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

export async function fetchAllResultsWithNext(fn) {
  let json = await fn();
  // NOTE(kilemensi): Since we're  fetching all, we'll no longer need next
  const { results, next, ...others } = json;
  while (json.next) {
    // next url can only be determine from the result of previous fetch so
    // we do ned await in loop
    // eslint-disable-next-line no-await-in-loop
    json = await fetchJson(json.next);
    results.push(...json.results);
  }

  return { ...others, results };
}

export const createList = async (payload, url) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const result = await data.json();

  return result;
};

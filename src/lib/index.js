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
  const res = await fetch(searchUrl);
  return res.json();
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

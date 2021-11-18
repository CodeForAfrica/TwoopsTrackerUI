import { subDays } from "date-fns";

const BASE_URL = process.env.TWOOPSTRACKER_API_URL;

export async function fetchAll() {
  const res = await fetch(`${BASE_URL}/tweets/`);
  return res.json();
}

export async function search({ term, theme, location, days = 7 }) {
  const searchParams = new URLSearchParams();
  let query = term || theme;
  if (query && theme) {
    query = `(${query} AND ${theme})`;
  }
  if (query) {
    searchParams.append("query", query);
  }
  if (location) {
    searchParams.append("location", location);
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

export async function deleteSavedSearches(searchId, session) {
  const option = {
    method: "DELETE",
    headers: { Authorization: `Bearer ${session?.user?.access_token}` },
    body: JSON.stringify({
      id: searchId,
    }),
  };
  const res = await fetch(`${BASE_URL}/tweets/searches`, option);
  return res.json();
}

export async function getSavedSearches(session) {
  const option = {
    method: "GET",
    headers: { Authorization: `Bearer ${session?.user?.access_token}` },
  };
  const res = await fetch(`${BASE_URL}/tweets/searches`, option);
  return res.json();
}

export async function postSavedSearch({
  term,
  theme,
  location,
  days = 7,
  name,
  session,
}) {
  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, days).toISOString().substr(0, 10);

  let query = term || theme;
  if (query && theme) {
    query = `(${query} AND ${theme})`;
  }

  const option = {
    method: "POST",
    headers: { Authorization: `Bearer ${session?.user?.access_token}` },
    body: JSON.stringify({
      name,
      query: {
        term: query,
        endDate,
        location,
        startDate,
      },
    }),
  };

  const res = await fetch(`${BASE_URL}/tweets/searches`, option);
  return res.json();
}

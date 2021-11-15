import { subDays } from "date-fns";

const BASE_URL = "https://dev.investigate.africa/v1";

export async function fetchAll() {
  const res = await fetch(`${BASE_URL}/tweets/`);
  return res.json();
}

export async function fetchLists() {
  const res = await fetch(`${BASE_URL}/lists/`);
  return res.json();
}

export async function createList(payload) {
  const res = await fetch(`${BASE_URL}/lists/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
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

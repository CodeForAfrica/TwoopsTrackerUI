import { subDays } from "date-fns";

const BASE_URL = process.env.TWOOPSTRACKER_API_URL;

export async function tweets() {
  const res = await fetch(`${BASE_URL}/tweets/`);
  return res.json();
}

export async function lists() {
  const res = await fetch(`${BASE_URL}/lists/`);
  return res.json();
}

export const updateList = async (url, payload, id) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  const data = await fetch(url);
  const result = await data.json();

  return result.results;
};

export const createList = async (payload, url) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await fetch(url);
  const result = await data.json();

  return result.results;
};

export const deleteList = async (url, id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  const data = await fetch(url);
  const result = await data.json();

  return result.results;
};

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

export async function APIRequest(payload, method, param) {
  let url = BASE_URL;

  if (param) {
    url = `${url}/lists/${param}`;
  } else {
    url = `${url}/lists/`;
  }

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (payload) {
    options.body = payload;
  }

  const res = await fetch(url, options);

  if (method === "DELETE") {
    return res;
  }
  return res.json();
}

import { subDays } from "date-fns";

const BASE_URL = process.env.TWOOPSTRACKER_API_URL;

export async function lists() {
  const res = await fetch(`${BASE_URL}/lists/`);
  return res.json();
}

export async function fetchList(id) {
  const res = await fetch(`${BASE_URL}/lists/${id}`);
  return res.json();
}

export const createList = async (payload, url) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const result = await data.json();

  return result;
};

export const deleteList = async (url, id) => {
  const data = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  const result = await data.json();

  return result;
};

export const updateList = async (url, payload, id) => {
  const data = await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  const result = await data.json();

  return result;
};

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

export async function fetchJson(url) {
  const res = await fetch(url);
  return res.json();
}

function tweetsSearchParamFromSearchQuery({
  query,
  location,
  days = 7,
  page,
  pageSize,
}) {
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

  return searchParams;
}

function tweetsSearchQueryFromUserQuery(userQuery) {
  const {
    query: term,
    theme,
    location,
    days: daysAsString,
    page,
    pageSize,
  } = userQuery;
  let query = term || theme;
  if (query && theme) {
    query = `(${query} AND ${theme})`;
  }
  let days = parseInt(daysAsString, 10) || undefined;
  if (days > 30) {
    days = 30;
  }
  return { query, location, days, page, pageSize };
}

export async function tweets(userQuery = {}) {
  const searchQuery = tweetsSearchQueryFromUserQuery(userQuery);
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const url = `${BASE_URL}/tweets/?${searchParams.toString()}`;
  return fetchJson(url);
}

// Do not include page or pageSize in searchQuery
export async function tweetsInsights({ page, pageSize, ...userQuery } = {}) {
  const searchQuery = tweetsSearchQueryFromUserQuery(userQuery);
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const url = `${BASE_URL}/tweets/insights?${searchParams.toString()}`;
  return fetchJson(url);
}

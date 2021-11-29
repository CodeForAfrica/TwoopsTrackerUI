import { subDays } from "date-fns";

import fetchJson from "@/twoopstracker/utils/fetchJson";

const BASE_URL = process.env.TWOOPSTRACKER_API_URL;

export async function lists(session) {
  const result = await fetchJson(`${BASE_URL}/lists/`, session);
  return result;
}

export async function fetchList(id, session) {
  const results = await fetchJson(`${BASE_URL}/lists/${id}`, session);
  return results;
}

export async function APIRequest(payload, method, param, session) {
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

  const res = await fetchJson(url, session, options);

  if (method === "DELETE") {
    return res;
  }
  return res;
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

export async function tweets(userQuery = {}, session) {
  const searchQuery = tweetsSearchQueryFromUserQuery(userQuery);
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const url = `${BASE_URL}/tweets/?${searchParams.toString()}`;
  return fetchJson(url, session);
}

// Do not include page or pageSize in searchQuery
export async function tweetsInsights(
  { page, pageSize, ...userQuery } = {},
  session
) {
  const searchQuery = tweetsSearchQueryFromUserQuery(userQuery);
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const url = `${BASE_URL}/tweets/insights?${searchParams.toString()}`;
  return fetchJson(url, session);
}

export async function deleteSavedSearch(searchId, session) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetchJson(`${BASE_URL}/tweets/searches/${searchId}`, session, options);
}

export async function updateSavedSearch(searchId, payload, session) {
  const options = {
    method: "PUT",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetchJson(`${BASE_URL}/tweets/searches/${searchId}`, session, options);
}

export async function getSavedSearches({ page, pageSize }, session) {
  const searchParams = new URLSearchParams();
  if (page) {
    searchParams.append("page", page);
  }
  if (pageSize) {
    searchParams.append("page_size", pageSize);
  }

  const options = {
    method: "GET",
  };
  return fetchJson(
    `${BASE_URL}/tweets/searches?${searchParams.toString()}`,
    session,
    options
  );
}

export async function postSavedSearch(payload, session) {
  const userQuery = JSON.parse(payload);
  const {
    query: queryTerm,
    location,
    days,
  } = tweetsSearchQueryFromUserQuery(userQuery);

  const d = days ?? 7;

  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, d).toISOString().substr(0, 10);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userQuery?.name,
      query: {
        term: queryTerm,
        endDate,
        location,
        startDate,
      },
    }),
  };

  return fetchJson(`${BASE_URL}/tweets/searches`, session, options);
}

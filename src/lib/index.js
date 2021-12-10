import { subDays } from "date-fns";

import fetchJson from "@/twoopstracker/utils/fetchJson";

const BASE_URL = process.env.NEXT_PUBLIC_TWOOPSTRACKER_API_URL;

export async function lists(session, pageData) {
  const listParams = new URLSearchParams();

  if (pageData.page) {
    listParams.append("page", pageData.page);
  }
  if (pageData.pageSize) {
    listParams.append("page_size", pageData.pageSize);
  }
  if (pageData.download) {
    listParams.append("download", pageData.download);
  }

  const result = await fetchJson(
    `${BASE_URL}/lists/?${listParams.toString()}`,
    session
  );
  return result;
}

export async function list(id, session) {
  return fetchJson(`${BASE_URL}/lists/${id}`, session);
}

export async function allAccounts(session, pageData) {
  const listParams = new URLSearchParams();

  if (pageData.page) {
    listParams.append("page", pageData.page);
  }
  if (pageData.pageSize) {
    listParams.append("page_size", pageData.pageSize);
  }
  const result = await fetchJson(
    `${BASE_URL}/accounts/?${listParams.toString()}`,
    session
  );
  return result;
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

  return fetchJson(url, session, options);
}

export function tweetsSearchParamFromSearchQuery({
  query,
  location,
  days = 7,
  page,
  pageSize,
  download,
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
  if (download) {
    searchParams.append("download", download);
  } else {
    searchParams.append("format", "json");
  }

  return searchParams;
}

export function tweetsUserQuery(requestQuery) {
  const { query, theme, location, days, page, pageSize, download } =
    requestQuery;

  return { query, theme, location, days, page, pageSize, download };
}

export function tweetsSearchQueryFromUserQuery(userQuery) {
  const {
    query: term,
    theme,
    location,
    days: daysAsString,
    page,
    pageSize,
    download,
  } = userQuery || {};
  let query = term || theme;
  if (query && theme) {
    query = `(${query} AND ${theme})`;
  }
  let days = parseInt(daysAsString, 10) || undefined;
  if (days > 30) {
    days = 30;
  }
  return { query, location, days, page, pageSize, download };
}

export async function tweets(requestQuery, session) {
  const searchQuery = tweetsSearchQueryFromUserQuery(
    tweetsUserQuery(requestQuery)
  );
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const url = `${BASE_URL}/tweets/?${searchParams.toString()}`;
  return fetchJson(url, session);
}

// Do not include page or pageSize in searchQuery
export async function tweetsInsights(requestQuery, session) {
  const { page, pageSize, ...requestQueryQuery } = requestQuery || {};
  const searchQuery = tweetsSearchQueryFromUserQuery(
    tweetsUserQuery(requestQueryQuery)
  );
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

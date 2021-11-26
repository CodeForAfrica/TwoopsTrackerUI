async function fetchJson(url, session, options) {
  let fetchOptions = options;
  if (session?.accessToken) {
    fetchOptions = { ...options };
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${session.accessToken}`,
    };
  }

  const res = await fetch(url, fetchOptions);
  if (fetchOptions?.method === "DELETE") {
    return res;
  }
  return res.json();
}

export default fetchJson;

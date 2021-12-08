async function fetchJson(url, session, options = {}) {
  let fetchOptions = options;
  if (session?.accessToken) {
    fetchOptions = { ...options };
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${session.accessToken}`,
    };
  }
  const res = await fetch(url, fetchOptions);
  if (res.status === 204) {
    return res;
  }
  if (url.includes("download")) {
    if (res.status.ok) {
      return res.text();
    }
    return null;
  }
  return res.json();
}

export default fetchJson;

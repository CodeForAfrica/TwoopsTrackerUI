async function fetchJson(url, session, options) {
  let fetchOptions = options;
  if (session?.accessToken) {
      fetchOptions = { ...options };
      fetchOptions.headers = {
        ...fetchOptions.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }

  const res = await fetch(url, fetchOptions);
  return res.json();
}

export default fetchJson;

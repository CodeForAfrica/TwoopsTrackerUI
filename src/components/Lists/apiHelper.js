const fetchData = async (payload, url) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await fetch(url);
  const result = await data.json();

  return result.results;
};

export default fetchData;

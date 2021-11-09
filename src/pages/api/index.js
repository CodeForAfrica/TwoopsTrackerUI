const url = process.env.NEXT_PUBLIC_TWOOPSTRACKER_API_URL;

const fetchAllTweets = async () => {
  const res = await fetch(`${url}/tweets/`);
  const data = await res.json();

  return data;
};

const searchTweets = async (search, date, theme, location) => {
  let searchUrl = `${url}/tweets/?location=${location}`;

  if (search && theme) {
    searchUrl = `${searchUrl}&&query="${theme} and ${search}"`;
  } else {
    searchUrl = `${searchUrl}&&query=${theme || search}`;
  }

  if (date) {
    const newDate = new Date();
    const today = newDate.toISOString().substr(0, 10);

    newDate.setDate(newDate.getDate() - date);
    const pastDate = newDate.toISOString().substr(0, 10);

    searchUrl = `${searchUrl}&&startDate=${pastDate}&&endDate=${today}`;
  }

  const res = await fetch(searchUrl);
  const data = await res.json();

  return data;
};

export { fetchAllTweets, searchTweets };

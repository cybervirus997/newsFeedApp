import axios from 'axios';

const endpointsHead = 'https://asia-south1-kc-stage-rp.cloudfunctions.net/';

const fetchNews = async (query: string, from: string, to?: string) => {
  const endpoint = `${endpointsHead}globalNews?endpoint=everything&q=${query}&from=${from}&sortBy=publishedAt${
    to ? `&to=${to}` : ''
  }`;

  const response = await axios.post(endpoint, {
    headers: { Accept: 'application/json' },
  });

  return response.data.articles;
};

export { fetchNews };

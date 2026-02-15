import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
const BASE_URL = 'https://pixabay.com/api/';

const httpClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export const hasApiKey = Boolean(API_KEY);

export function getImagesByQuery(query) {
  if (!API_KEY) {
    return Promise.reject(
      new Error('Pixabay API key is missing. Set VITE_PIXABAY_KEY in your .env file.')
    );
  }

  return httpClient.get('', { params: { q: query } }).then(({ data }) => data);
}

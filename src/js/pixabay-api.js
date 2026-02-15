import axios from 'axios';

const API_KEY = '54645624-93bc72701cdff138f1edf2876';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error('Query is empty');
  }

  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: trimmed,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data;
}


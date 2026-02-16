import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54645624-93bc72701cdff138f1edf2876';

export function getImagesByQuery(query) {
  const q = query.trim();

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}

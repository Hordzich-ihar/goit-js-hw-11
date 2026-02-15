import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, hasApiKey } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');
const submitButton = form.querySelector('button[type="submit"]');

if (!hasApiKey) {
  iziToast.error({
    message: 'API key is missing. Add VITE_PIXABAY_KEY to .env and restart the dev server.',
    position: 'topRight',
    backgroundColor: '#f35c5c',
    progressBarColor: '#fff',
  });
  submitButton.disabled = true;
  submitButton.textContent = 'Add API key';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!hasApiKey) return;

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (!hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#f35c5c',
          progressBarColor: '#fff',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      iziToast.error({
        message:
          error?.message === 'Pixabay API key is missing. Set VITE_PIXABAY_KEY in your .env file.'
            ? 'API key is missing. Add VITE_PIXABAY_KEY to .env and restart the dev server.'
            : 'Failed to load images.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});

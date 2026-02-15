import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'loaders.css/loaders.min.css';

import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';

const refs = {
  form: document.querySelector('#search-form'),
  loader: document.querySelector('#loader'),
  imgList: document.querySelector('#gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.elements['search-text'].value.trim();

  if (!input) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  refs.loader.classList.remove('is-hidden');
  refs.imgList.innerHTML = '';

  getImagesByQuery(input)
    .then(res => {
      if (!res.hits || res.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(res.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      console.error('Fetch error: ', error);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });

  e.currentTarget.reset();
});

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!gallery) return;

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p class="info-label">Likes<span class="info-value">${likes}</span></p>
            <p class="info-label">Views<span class="info-value">${views}</span></p>
            <p class="info-label">Comments<span class="info-value">${comments}</span></p>
            <p class="info-label">Downloads<span class="info-value">${downloads}</span></p>
          </div>
        </a>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (gallery) gallery.innerHTML = '';
}

export function showLoader() {
  loader?.classList.remove('is-hidden');
}

export function hideLoader() {
  loader?.classList.add('is-hidden');
}

import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallryMarkUp = document.querySelector('.gallery');
const galleryEl = galleryItems
.map(({preview, description, original}) =>
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

gallryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});

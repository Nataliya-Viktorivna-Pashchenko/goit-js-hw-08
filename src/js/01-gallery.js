// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector(".gallery");


const renderGallery = (array) => array.map((item) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"/>
        </a>
    </li>`
)
    .join("");
galleryList.style.listStyle = "none";

galleryList.insertAdjacentHTML('beforeend', renderGallery(galleryItems));


const lightbox = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250, });


//console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onModal);

function createMarckupGallery(array) {
  return array
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        /></a>
    </li>
    `
    )
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", createMarckupGallery(galleryItems));

function onModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery__link", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

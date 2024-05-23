import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
listEl.addEventListener("click", onModal);

//рендер фото із масиву
function createMarckupGallery(array) {
  return array
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        /></a>
    </li>
`
    )
    .join("");
}
listEl.insertAdjacentHTML("beforeend", createMarckupGallery(galleryItems));

function onModal(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  //відміна перезагрузки
  event.preventDefault();
  console.log("img:", event.target);

  //відкриття модалки (підключена бібліотека)
  const selectedImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${selectedImg}" width="600" height="400">
  `);
  instance.show();

  //закриття Esc
  document.addEventListener("keydown", (event) => {
    const isEscKey = event.code === "Escape";
    if (isEscKey) {
      instance.close();
      //знімаємо слухача з клавіатури
      document.removeEventListener("keydown", () => {
        console.log("знімаємо слухача з клавіатури");
      });
    }
  });
}

import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const makeImages = ({ preview, original, description }) => {
  return `
    <div class = 'gallery__item'>
    <a class = 'gallery__link' href = ${original}>
    <img src=${preview}
    class="gallery__image" alt=${description} ></a>
    </div>
    `;
};
const makeImagesList = galleryItems.map(makeImages).join("");
galleryEl.insertAdjacentHTML("beforeend", makeImagesList);

const onOpenModal = (evt) => {
  evt.preventDefault();
  console.log(evt.target.nodeName);
};
galleryEl.addEventListener("click", onOpenModal);

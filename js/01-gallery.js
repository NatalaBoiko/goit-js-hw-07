import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const makeImages = ({ preview, original, description }) => {
  return `    
  <div class = 'gallery__item'>
  <a class = 'gallery__link' href = '${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
      />
    </a>
  </div>
  `;
};

const makeImagesList = galleryItems.map(makeImages).join("");
galleryEl.insertAdjacentHTML("beforeend", makeImagesList);

const onOpenModal = (evt) => {
  evt.preventDefault();
  const modalImg = evt.target.dataset.source;
  const modal = basicLightbox.create(`
    <img
      class="gallery__image"
      src='${modalImg}'
      data-source='${modalImg}'
      alt='${evt.target.alt}'
      width="800"
      height="600">
      `);

  const onEscaPress = (evt) => {
    // console.log(evt);
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", onEscaPress);
      modal.close();
    }
  };
  window.addEventListener("keydown", onEscaPress);

  modal.show();
};

galleryEl.addEventListener("click", onOpenModal);

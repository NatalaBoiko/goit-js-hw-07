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
  const modal = basicLightbox.create(
    `<img
     src='${modalImg}'
     data-source='${modalImg}'
     alt='${evt.target.alt}'
     class="gallery__image"
     width="800"
     height="600">`,

    {
      onShow: (modal) => {
        window.addEventListener("keydown", onEscaPress);
      },
      onClose: (modal) => {
        window.removeEventListener("keydown", onEscaPress);
      },
    }
  );

  const onEscaPress = (evt) => {
    if (evt.code === "Escape") {
      modal.close();
    }
  };

  modal.show();
};

galleryEl.addEventListener("click", onOpenModal);

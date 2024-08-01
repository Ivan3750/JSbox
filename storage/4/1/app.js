const galleryItems = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
  ];
  
  const galleryContainer = document.querySelector('.js-gallery');
  const lightbox = document.querySelector('.js-lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('[data-action="close-lightbox"]');
  
  const createGalleryItem = ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
  
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryContainer.innerHTML = galleryMarkup;
  
  galleryContainer.addEventListener('click', onGalleryClick);
  closeButton.addEventListener('click', onCloseModal);
  
  function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
  
    const largeImageURL = event.target.dataset.source;
    openModal(largeImageURL);
  }
  
  function openModal(url) {
    lightbox.classList.add('is-open');
    lightboxImage.src = url;
  }
  
  function onCloseModal() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
  }
  
  lightbox.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  });
  
if (document.querySelector('.photo-gallery-modal')) {
  const galleryModal = document.querySelector('.photo-gallery-modal');
  const mainImage = document.querySelector('[data-main-image]');
  const imagesContainer = document.querySelector('[data-images]');
  const arrLeft = document.querySelector('[data-prev]');
  const arrRight = document.querySelector('[data-next]');
  const fullscreen = document.querySelector('[data-fullscreen]');
  const toggleGallery = document.querySelector('[data-toggle-gallery]');
  const closeModal = document.querySelector('[data-close]');
  let counter = 0;

  let images = [
    {
      imgSrc: 'https://lipsum.app/id/1/1024x768',
      imgDesc: '1',
    },
    {
      imgSrc: 'https://lipsum.app/id/2/1024x768',
      imgDesc: '2',
    },
    {
      imgSrc: 'https://lipsum.app/id/3/1024x768',
      imgDesc: '3',
    },
    {
      imgSrc: 'https://lipsum.app/id/4/1024x768',
      imgDesc: '4',
    },
    {
      imgSrc: 'https://lipsum.app/id/5/1024x768',
      imgDesc: '5',
    },
  ];

  images.forEach((image) => {
    let newImage = createImageTag(image.imgSrc, image.imgDesc);

    imagesContainer.appendChild(newImage);
  });

  imagesContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
      mainImage.src = e.target.src;
      mainImage.alt = e.target.alt;

      // Set counter to current image
      let obj = images.find((image) => image.imgSrc === e.target.src);
      let index = images.indexOf(obj);

      counter = index;
    }
  });

  // Set the displayed image
  mainImage.src = images[counter].imgSrc;
  mainImage.alt = images[counter].imgDesc;

  // Go to Previous image
  arrLeft.addEventListener('click', () => {
    counter = counter - 1;

    if (counter < 0) {
      counter = images.length - 1;
    }
    mainImage.src = images[counter].imgSrc;
  });

  // Go to Next image
  arrRight.addEventListener('click', () => {
    counter = counter + 1;
    if (counter > images.length - 1) {
      counter = 0;
    }

    mainImage.src = images[counter].imgSrc;
  });

  // Show all images at the bottom
  toggleGallery.addEventListener('click', () => {
    imagesContainer.classList.toggle('hide');
  });

  // Enter fullscreen
  fullscreen.addEventListener('click', () => {
    galleryModal
      .requestFullscreen()
      .then(function () {
        // element has entered fullscreen mode successfully
      })
      .catch(function (error) {
        // element could not enter fullscreen mode
      });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    galleryModal.classList.remove('active');
  });

  // Open modal
  document
    .querySelector('[data-open-gallery]')
    .addEventListener('click', () => {
      galleryModal.classList.add('active');
    });

  function createImageTag(src, desc) {
    let image = document.createElement('img');
    image.src = src;
    image.alt = desc;

    return image;
  }
}

const hamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const imageWidth = images[0].getBoundingClientRect().width;

let currentIndex = 0;

// Arrange the images side by side
images.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
});

// Move the track to show the current image
const moveToImage = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
};

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    moveToImage(currentIndex);
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    moveToImage(currentIndex);
});

// Automatic slide functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    moveToImage(currentIndex);
}, 8000);

// Abrir modal
function openModal(image) {
    const modal = document.getElementById("galleryModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    modal.style.display = "flex";
    modalImage.src = image.src;
    caption.innerHTML = image.alt;
  }
  
  // Fechar modal
  function closeModal() {
    const modal = document.getElementById("galleryModal");
    modal.style.display = "none";
  }
  
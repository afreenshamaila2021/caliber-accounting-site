// script.js

let currentIndex = 0;

function showNextImage() {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-img').length;
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100; // Move left by 100% for each image
    images.style.transform = `translateX(${offset}vw)`;
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);

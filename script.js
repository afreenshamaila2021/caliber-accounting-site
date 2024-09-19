document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100; // 100vw for each image
        carouselImages.style.transform = `translateX(${offset}vw)`;
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

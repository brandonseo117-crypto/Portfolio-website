const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(carouselTrack.children);
const nextCarouselButton = document.querySelector('.carousel-button.next');
const previousCarouselButton = document.querySelector('.carousel-button.prev');

const updateCarouselPosition = (carouselTrack, currentCarouselSlide, targetCarouselSlide) => {
    carouselTrack.style.transform = 'translateX(-' + targetCarouselSlide.style.left + ')';
    currentCarouselSlide.classList.remove('current-slide');
    targetCarouselSlide.classList.add('current-slide');
};

carouselSlides.forEach((carouselSlide, index) => {
    carouselSlide.style.left = `${index * 100}%`;
});

nextCarouselButton.addEventListener('click', () => {
    const currentCarouselSlide = carouselTrack.querySelector('.current-slide');
    const nextCarouselSlide = currentCarouselSlide.nextElementSibling || carouselSlides[0];
    updateCarouselPosition(carouselTrack, currentCarouselSlide, nextCarouselSlide);
});

previousCarouselButton.addEventListener('click', () => {
    const currentCarouselSlide = carouselTrack.querySelector('.current-slide');
    const previousCarouselSlide = currentCarouselSlide.previousElementSibling || carouselSlides[carouselSlides.length - 1];
    updateCarouselPosition(carouselTrack, currentCarouselSlide, previousCarouselSlide);
});
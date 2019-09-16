/* global Swiper */

const swiper = new Swiper('.js-multy-slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 779px
    779: {
      slidesPerView: 2,
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 3,
    },
  },
});

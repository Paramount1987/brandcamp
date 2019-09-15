/* global Swiper */

const swiper = new Swiper('.js-intro-slider', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

/* global Swiper */

const swiper = new Swiper('.js-pdct-gallery', {
  pagination: {
    el: '.swiper-pagination',
  },
});

const verticalSwiper = new Swiper('.js-pdct-vertical-gallery', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 10,
});

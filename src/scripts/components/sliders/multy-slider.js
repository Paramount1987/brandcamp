/* global Swiper */

$('.js-multy-slider').each(function initSlider() {
  const el = this;
  const perViewLg = +$(el).data('perviewlg') || 4;
  const perViewMd = +$(el).data('perviewmd') || 3;

  const swiper = new Swiper(el, {
    loop: true,
    slidesPerView: perViewLg,
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
        slidesPerView: perViewMd,
      },
    },
  });
});

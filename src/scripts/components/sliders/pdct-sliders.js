/* global Swiper */

$('.js-gallery-wrapper').each(function init() {
  const $wrapper = $(this);
  const $mainGallery = $wrapper.find('.js-pdct-gallery');
  const $verticalGallery = $wrapper.find('.js-pdct-vertical-gallery');

  const $verticalSlides = $verticalGallery.find('.swiper-slide');
  const $arrowVerticalPrev = $wrapper.find('.js-vertical-prev');
  const $arrowVerticalNext = $wrapper.find('.js-vertical-next');

  const mainSwiper = new Swiper($mainGallery, {
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const verticalSwiper = new Swiper($verticalGallery, {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
  });

  // curr click vertical slide
  $verticalSlides.click(function initClickSlide() {
    const $currSlide = $(this);

    $verticalSlides.removeClass('is-active');
    $currSlide.addClass('is-active');
    const currInd = $currSlide.data('rel');

    mainSwiper.slideTo(+currInd);
  });

  //--------------------------------

  // click prev & next arrow
  $arrowVerticalPrev.click(() => {
    verticalSwiper.slidePrev();
  });

  $arrowVerticalNext.click(() => {
    verticalSwiper.slideNext();
  });
});

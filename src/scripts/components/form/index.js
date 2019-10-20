$(document).ready(() => {
  $('.js-select-form').each(function init() {
    const $el = $(this);
    const theme = $el.data('theme') || 'default';

    $el.select2({
      minimumResultsForSearch: Infinity,
      theme,
    });
  });

  $('.js-btn-toggle').click(function clickBtn() {
    const $btn = $(this);

    const $formParent = $btn.closest('.form');
    const $formTarget = $($btn.data('rel'));

    $formParent.slideUp();
    $formTarget.slideDown();
  });
});

$(document).ready(() => {
  $('.js-select-form').each(function init() {
    const $el = $(this);
    const theme = $el.data('theme') || 'default';

    $el.select2({
      minimumResultsForSearch: Infinity,
      theme,
    });
  });
});

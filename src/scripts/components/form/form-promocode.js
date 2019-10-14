$('.js-form-promocode').each(function init() {
  const $form = $(this);
  const $input = $form.find('.js-input');
  const $btn = $form.find('.js-btn');

  $input.on('input', (ev) => {
    const { value } = ev.target;

    $input.removeClass('is-error');
    $form.find('.txt-red').remove();

    if (value.length) {
      $btn.removeClass('is-disabled');
    } else {
      $btn.addClass('is-disabled');
    }
  });
});

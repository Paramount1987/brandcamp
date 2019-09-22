const Nav = {
  init() {
    this.$btnCatalog = $('.js-header-ct');
    this.$headerCatalog = $('.js-header-catalog');

    this.$btnNav = $('.js-btn-nav');
    this.$nav = $('.js-nav-mbl');
    this.btnClickHandler();
    this.navLinkHandler();
    this.btnCatalogHandler();
    this.clickOutsideHandler();
  },

  btnClickHandler() {
    const self = this;

    this.$btnNav.click(() => {
      self.$btnNav.toggleClass('is-active');
      self.$nav.slideToggle(200);
    });
  },

  navLinkHandler() {
    $('.js-nav-link, .js-nav-lng').click(function handler(e) {
      e.preventDefault();
      const $el = $(this);
      const $target = $($el.attr('href'));

      $target.slideToggle(200);
    });
  },

  btnCatalogHandler() {
    const self = this;

    this.$btnCatalog.click((e) => {
      e.preventDefault();
      self.$headerCatalog.slideToggle();
    });
  },

  clickOutsideHandler() {
    const self = this;

    $(document).on('click', (e) => {
      const $target = $(e.target);

      if (!self.$btnCatalog.is($target) && !$target.closest(self.$btnCatalog).length) {
        self.$headerCatalog.slideUp();
      }

      if (!$target.closest('.js-nav-lng').length) {
        $('#nav-lng').slideUp();
      }
      if (!$target.closest('.js-nav-link').length) {
        $('#nav-about').slideUp();
      }
    });
  },
};

export default Nav;

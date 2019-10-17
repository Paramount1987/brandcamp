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
    $('.js-nav-link, .js-nav-lng, .js-aside-link').click(function handler(e) {
      const $el = $(this);
      const isNavLink = $el.hasClass('js-aside-link');

      if (isNavLink && !window.matchMedia("(max-width: 767px)").matches) {
        return;
      }
      e.preventDefault();
      const $target = isNavLink ? $($el.data('rel')) : $($el.attr('href'));

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
      if (!$target.closest('.js-aside-nav').length && !$target.closest('.js-aside-link').length
        && window.matchMedia("(max-width: 767px)").matches) {
        $('#aside-nav').slideUp();
      }
    });
  },
};

export default Nav;

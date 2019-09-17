const Nav = {
  init() {
    this.$btnNav = $('.js-btn-nav');
    this.$nav = $('.js-nav-mbl');
    this.btnClickHandler();
    this.navLinkHandle();
  },

  btnClickHandler() {
    const self = this;

    this.$btnNav.click(() => {
      self.$btnNav.toggleClass('is-active');
      self.$nav.slideToggle(200);
    });
  },

  navLinkHandle() {
    $('.js-nav-link, .js-nav-lng').click(function handler(e) {
      e.preventDefault();
      const $el = $(this);
      const $target = $($el.attr('href'));

      $target.slideToggle(200);
    });
  },
};

export default Nav;

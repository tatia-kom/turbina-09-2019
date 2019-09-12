$(document).ready(function() {
    var banner_top = $('.banner').offset().top;

    $(window).resize(function() {
        banner_top = $('.banner').offset().top;
    });

    $(window).scroll(function() {
        var ww = $(window).width();

        if (ww < 768) {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= banner_top) {
                $('.mobile-header').addClass('mobile-header--show');
                $('.header__top-menu-wrap').addClass('header__top-menu-wrap--scroll');
            }
            else {
                $('.header__top-menu-wrap').removeClass('header__top-menu-wrap--scroll');
                $('.mobile-header').removeClass('mobile-header--show');
            }
        }
        else {
            $('.header__top-menu-wrap--scroll').removeClass('header__top-menu-wrap--scroll');
            $('.mobile-header--show').removeClass('mobile-header--show');
        }
    });
});
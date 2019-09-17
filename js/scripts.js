$(document).ready(function() {
    var banner_top = $('.billboard').offset().top;
    catalogResponsive();

    $(window).resize(function() {
        banner_top = $('.billboard').offset().top;

        catalogResponsive();
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

    $('.category__list').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('category__list--opened');
    });
});

function catalogResponsive() {
    if ($(window).width() < 768) {
        $('.category__content').append($('.category__left-label'));
        $('.category__content').append($('.category__list-block'));
        $('.category__content').append($('.category__left-remont'));
    }
    else {
        $('.category__filter').append($('.category__left-label'));
        $('.category__filter').append($('.category__list-block'));
        $('.category__filter').append($('.category__left-remont'));
    }
}
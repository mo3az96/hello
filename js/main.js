$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
    });
    ///////// **products Slider** ///////// 
    $('.productsSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2,
                margin: 14,
            },
            480: {
                items: 3,
                margin: 25,
            },
            767: {
                items: 4,
                margin: 25,
            },
            992: {
                items: 5,
                margin: 25,
            },
            1200: {
                items: 6,
                margin: 15,
            },
            1500: {
                items: 6,
                margin: 25,
            },
        }
    });
    ///////// **brands Slider** ///////// 
    $('.brandsSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2,
                margin: 13,
            },
            480: {
                items: 3,
                margin: 25,
            },
            767: {
                items: 4,
                margin: 25,
            },
            992: {
                items: 5,
                margin: 25,
            },
            1200: {
                items: 6,
                margin: 15,
            },
            1500: {
                items: 6,
                margin: 25,
            },
        }
    });
    ///////// **brands Slider** ///////// 
    $('.feats-slider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
                touchDrag: true,
            },
            767: {
                items: 2,
                mouseDrag: true,
                touchDrag: true,
            },
            992: {
                items: 3,
                mouseDrag: true,
                touchDrag: true,
            },
            1200: {
                items: 4,
            },
        }
    });
    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }

    ///////// **drop-menu** /////////
    if ($(window).width() <= 991) {
        $('.drop-btn .nav-a').removeAttr("href")
        $('.drop-btn .nav-a').click(function () {
            $(".drop-btn .nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".drop-btn .nav-a").not(this).siblings().slideUp(500);
        })
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
});
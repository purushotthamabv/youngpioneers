function menuClick() {
    var button = $("#hamburger-menu");
    var span = button.find("span");
    var menuItems = $(".menu li a");
    var nav = $("#ham-navigation");

    button.on("click", function() {
        span.toggleClass("hamburger-menu-button-close");
        nav.toggleClass("on");
    });

    menuItems.on("click", function() {
        if (nav.hasClass("on")) {
            button.click();
        }
    });

    $(document).on('click', '.menu > li > a', function(e) {
        var mainindex = $(this).attr('data-index');
        if (mainindex !== undefined) {
            e.preventDefault(); 
            scrollpage(mainindex);
            return;
        }
    });

    function getHeaderHeight() {
        return $("header").outerHeight() || 0;
    }

    function scrollToSection(hash) {
        var target = $(hash);
        var headerHeight = getHeaderHeight();
        console.log("Scrolling to:", hash, "Header Height:", headerHeight);

        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top - headerHeight },
                500
            );
        }
    }

    if (window.location.hash) {
        setTimeout(function () {
            scrollToSection(window.location.hash);
        }, 300);
    }

    $(document).on("click", "a[href*='#']", function (e) {
        var targetId = $(this).attr("href").split("#")[1];
        var target = $("#" + targetId);
        console.log("Clicked on:", targetId, "Found:", target.length);

        if (target.length) {
            e.preventDefault();
            scrollToSection("#" + targetId);
            history.pushState(null, null, "#" + targetId);
        }
    });

}

function scrollpage(index) {
    $('html, body').stop();
    $('html, body').animate({ 
        scrollTop: $('.section').eq(index).offset().top - 180 
    }, 1000, function () {
        setTimeout(function () {
            triggerWp = 0;
        }, 0);
    });
}

function scrolling() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(0);
        }

        if ($(window).scrollTop()) {
            $('#header').addClass('scrolled');
        }
        else {
            $('#header').removeClass('scrolled');
        }
    })
}

function wayPoint() {
    var sections = $('.section');
    var menuItems = $('.menu li');
   
    sections.each(function(index) {
        var section = $(this);
        
        section.waypoint(function(direction) {
            if (direction === 'down') {
                menuItems.removeClass('active');
                $('.menu li a[data-index="' + index + '"]').parent().addClass('active');
            }
        }, { offset: '50%' });

        section.waypoint(function(direction) {
            if (direction === 'up') {
                menuItems.removeClass('active');
                $('.menu li a[data-index="' + index + '"]').parent().addClass('active');
            }
        }, { offset: '-50%' });
    });
}

function tabFunction() {
    $(document).on('click', '.tab-header', function (e) {
        e.preventDefault();
        var index = jQuery(this).index();
        if (!$(this).hasClass('active')) {
            $('.tab-header').removeClass('active');
            $(this).addClass('active');
            jQuery('.tab-content').stop().hide();
            jQuery('.tab-content').eq(index).show();
        }
    });
}

var currentPlayingVideo = null;

function videoPlay() {
    jQuery(document).on('click', '.video_play', function() {
        var videoWrap = jQuery(this).parents('.video-wrap');
        var iframe = videoWrap.find('.video-player-frame');
        var src = iframe.attr('src');
        if (currentPlayingVideo && currentPlayingVideo !== iframe[0]) {
            var currentSrc = jQuery(currentPlayingVideo).attr('src').replace('&autoplay=1', '');
            jQuery(currentPlayingVideo).attr('src', currentSrc);
            jQuery(currentPlayingVideo).parents('.video-wrap').find('.video_player_inner').css({"visibility": "visible"});
        }
        
        // Play the new video
        videoWrap.find('.video_player_inner').css({"visibility": "hidden"});
        iframe.attr('src', src + "&autoplay=1");

        // Update the current playing video
        currentPlayingVideo = iframe[0];
    });
}

function marqueeToggle() {
    jQuery(document).on('click', '.close-marquee', function() {
        $(this).parent('.marquee-section').fadeOut();
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('.marquee-section').fadeIn();
        }
    })
}

function slider() {
    $('.entrepreneurship-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        singleItem: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    })
    $('.banner-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        nav:false,
        singleItem: true,
        items:1,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    })

    // $('.testimonial-slider').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     items:4,
    //     autoplay:true,
    //     autoplayTimeout:5000,
    //     autoplayHoverPause:true,
    //     navText: ["<span class='left-arrow'>","<span class='right-arrow'>"],
    //     dots: false,
    //     responsive:{
    //         0:{
    //             nav:false,
    //             dots:true,
    //             items:1,
    //         },
    //         810:{
    //             nav:true,
    //             dots:false,
    //             items:2,
    //         },
    //         1160:{
    //             nav:false,
    //             dots:true,
    //             items:4,
    //         },
    //     }
    // });

    $('.founders-section').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        items:3,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        navText: ["<span class='left-arrow'>","<span class='right-arrow'>"],
        dots:true,
        nav:false,
        responsive:{
            0: {
                items: 1,
              },
              600: {
                items: 2
              },
              1000: {
                items: 3
              }
        }
    })

    $('.single-block-banner').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        items:1,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        navText: ["<span class='left-arrow'>","<span class='right-arrow'>"],
        dots:true,
        nav:false,
    })
    $('.news-slider').owlCarousel({
        loop:true,
        margin:40,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots:true,
        nav:false,
        responsive:{
            0: {
                items: 1,
              },
              600: {
                items: 3
              },
              1000: {
                items: 4
              }
        }
    })
}

function setEqualHeight() {
    var windowWidth = $(window).width();
    if (windowWidth >= 810) {
        var maxHeight = 0;
        $('.testimonial-slider .two-col-block .col').each(function() {
            var colHeight = $(this).outerHeight();
            if (colHeight > maxHeight) {
                maxHeight = colHeight;
            }
        });
        $('.testimonial-slider .two-col-block .col').css('height', maxHeight);
    } else {
        $('.testimonial-slider .two-col-block .col').css('height', 'auto'); // Reset height
    }
}

function popUp() {
    $('.learn-more').click(function() {
        var popupId = $(this).data('popup');
        $('#' + popupId).fadeIn();
    });
  
    $('.close-btn').click(function () {
        $(this).closest('.popup').fadeOut();
    });
  
    $(window).click(function(event) {
        if ($(event.target).hasClass('popup')) {
          $(event.target).fadeOut();
        }
    });

    $(".toggleButton").click(function() {
        $('.plus-icon').toggleClass('rorate')
        $("#toggleContent").slideToggle("slow");
      });
}

function hideLoader() {
    setTimeout(() => {
        $('.page-loader').fadeOut();
    }, 6000);
}

$(document).ready(function () {
    menuClick();
    wayPoint();
    scrolling();
    tabFunction();
    videoPlay();
    slider();
    setEqualHeight();
    marqueeToggle();
    popUp();
    hideLoader();
});

$(window).resize(function() {
    setEqualHeight();
});
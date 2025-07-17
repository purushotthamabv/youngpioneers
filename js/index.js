function menuClick() {
    var button = $("#hamburger-menu");
    var span = button.find("span");
    var menuItems = $(".menu li a");
    var nav = $("#ham-navigation");

    button.on("click", function () {
        span.toggleClass("hamburger-menu-button-close");
        nav.toggleClass("on");
    });

    menuItems.on("click", function () {
        if (nav.hasClass("on")) {
            button.click();
        }
    });

    $(document).on('click', '.menu > li > a', function (e) {
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

    sections.each(function (index) {
        var section = $(this);

        section.waypoint(function (direction) {
            if (direction === 'down') {
                menuItems.removeClass('active');
                $('.menu li a[data-index="' + index + '"]').parent().addClass('active');
            }
        }, { offset: '50%' });

        section.waypoint(function (direction) {
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

const videoList = [
    {
        type: "mp4",
        title: "GSL Young Pioneers Launchpad 2025",
        fileName: "GSL_Young_Pioneers_Launchpad_2025",
        thumbnail: "./images/thumbnails/intro-video.jpg",
        url: "https://www.youtube.com/embed/BvFBHxQTEZY?si=K5N6f8KwahEdaFyo"
    },
    {
        type: "mp4",
        title: "Dr. Rahul Sharma – Laxmi School Testimonial",
        fileName: "Dr_Rahul_Sharma_Testimonial_Laxmi_School_Video",
        thumbnail: "./images/thumbnails/cambia-school.jpg",
        url: "https://www.youtube.com/embed/KtDyZKeXkM0?si=pP2O6VDXR4iqEFEv"
    },
    {
        type: "mp4",
        title: "Principal – Bharti Public School Testimonial",
        fileName: "Principal_Testimonial_Bharti_Public_School",
        thumbnail: "./images/thumbnails/bharathi-public-school.jpg",
        url: "https://www.youtube.com/embed/ztuE0jV86to?si=H4_4fOcH21qZ4gBm"
    },
    {
        type: "mp4",
        title: "Bharti Public School Testimonial 1",
        fileName: "Testimonial_Bharti_Public_School_Video_1",
        thumbnail: "./images/thumbnails/dav.jpg",
        url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    },
    // {
    //     type: "mp4",
    //     title: "Bharti Public School Testimonial 2",
    //     fileName: "Testimonial_Bharti_Public_School_Video_2",
    //     thumbnail: "./images/yp-revolution-2.jpg",
    //     url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    // },
    // {
    //     type: "mp4",
    //     title: "Laxmi School Testimonial 1",
    //     fileName: "Testimonial_Laxmi_School_Video_1",
    //     thumbnail: "./images/yp-revolution-3.jpg",
    //     url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    // },
    // {
    //     type: "mp4",
    //     title: "Laxmi School Testimonial 2",
    //     fileName: "Testimonial_Laxmi_School_Video_2",
    //     thumbnail: "./images/yp-revolution-1.png",
    //     url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    // },
    //  {
    //     type: "mp4",
    //     title: "Testimonial Video 1",
    //     fileName: "T1_2706",
    //     thumbnail: "./images/yp-revolution-2.jpg",
    //     url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    // },
    // {
    //     type: "mp4",
    //     title: "Testimonial Video 2",
    //     fileName: "T2_2706",
    //     thumbnail: "./images/yp-revolution-3.jpg",
    //     url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    // },
];

let currentPlayingVideo = null;

function videoPlay() {
  jQuery(document).on("click", ".video_play", function () {
    const videoWrap = jQuery(this).closest(".video-wrap");
    const videoType = videoWrap.attr("data-type");
    const player = videoWrap.find(".video-player-frame");

    // Stop/reset currently playing video (anywhere on the page)
    if (currentPlayingVideo && currentPlayingVideo[0] !== player[0]) {
      const previousWrap = currentPlayingVideo.closest(".video-wrap");
      const previousType = previousWrap.attr("data-type");

      if (previousType === "youtube") {
        currentPlayingVideo.attr("src", "");
      } else if (previousType === "mp4") {
        currentPlayingVideo[0].pause();
        currentPlayingVideo[0].currentTime = 0;
      }

      previousWrap.find(".video_player_inner").css("visibility", "visible");
    }

    videoWrap.find(".video_player_inner").css("visibility", "hidden");

    if (videoType === "youtube") {
      const baseSrc = player.attr("data-src");
      player.attr("src", baseSrc + "&autoplay=1");
    } else if (videoType === "mp4") {
      player[0].play();
    }
    currentPlayingVideo = player;
  });
}

function initVideoList() {
    const $videoContainer = $(".video-container");

    videoList.forEach((video, index) => {
        const videoHTML = `
        <div class="video-wrap position-relative" data-type="youtube" style="padding: 0;">
          <div class="video-player">
            <iframe
              class="video-player-frame"
              width="100%"
              height="315"
              src=""
              data-src="${video.url}"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video_player_inner height-100 position-relative">
            <div class="video_bg flex-slide home" style="background: url(${video.thumbnail}) no-repeat center center;"></div>
            <div class="video_play">
              <div class="video_play_bg"></div>
            </div>
          </div>
        </div>
      `;
        $videoContainer.append(videoHTML);
    });

    if ($videoContainer.hasClass('owl-carousel')) {
        $videoContainer.owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: 28000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
            onTranslate: function () {
                if (currentPlayingVideo) {
                    const previousWrap = currentPlayingVideo.closest(".video-wrap");
                    const previousType = previousWrap.attr("data-type");

                    if (previousType === "mp4") {
                        currentPlayingVideo[0].pause();
                        currentPlayingVideo[0].currentTime = 0;
                    } else if (previousType === "youtube") {
                        currentPlayingVideo.attr("src", ""); // clear iframe src to stop video
                    }

                    previousWrap.find(".video_player_inner").css("visibility", "visible");
                    currentPlayingVideo = null;
                }
            }
        });
    }

    videoPlay();
}


function marqueeToggle() {
    jQuery(document).on('click', '.close-marquee', function () {
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
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        singleItem: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }
    })
    $('.banner-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        singleItem: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
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
        loop: false,
        margin: 40,
        nav: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        navText: ["<span class='left-arrow'>", "<span class='right-arrow'>"],
        dots: true,
        nav: false,
        responsive: {
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
        loop: false,
        margin: 40,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        navText: ["<span class='left-arrow'>", "<span class='right-arrow'>"],
        dots: true,
        nav: false,
    })

    $('.news-slider').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive: {
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
        $('.testimonial-slider .two-col-block .col').each(function () {
            var colHeight = $(this).outerHeight();
            if (colHeight > maxHeight) {
                maxHeight = colHeight;
            }
        });
        $('.testimonial-slider .two-col-block .col').css('height', maxHeight);
    } else {
        $('.testimonial-slider .two-col-block .col').css('height', 'auto');
    }
}

function popUp() {
    $('.learn-more').click(function () {
        var popupId = $(this).data('popup');
        $('#' + popupId).fadeIn();
    });

    $('.close-btn').click(function () {
        $(this).closest('.popup').fadeOut();
    });

    $(window).click(function (event) {
        if ($(event.target).hasClass('popup')) {
            $(event.target).fadeOut();
        }
    });

    $(".toggleButton").click(function () {
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
    initVideoList();
});

$(window).resize(function () {
    setEqualHeight();
});
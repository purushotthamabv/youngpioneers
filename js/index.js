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
        thumbnail: "./images/thumbnails/intro-video.webp",
        url: "https://www.youtube.com/embed/BvFBHxQTEZY?si=K5N6f8KwahEdaFyo"
    },
    {
        type: "mp4",
        title: "Dr. Rahul Sharma – Laxmi School Testimonial",
        fileName: "Dr_Rahul_Sharma_Testimonial_Laxmi_School_Video",
        thumbnail: "./images/thumbnails/cambia-school.webp",
        url: "https://www.youtube.com/embed/KtDyZKeXkM0?si=pP2O6VDXR4iqEFEv"
    },
    {
        type: "mp4",
        title: "Principal – Bharti Public School Testimonial",
        fileName: "Principal_Testimonial_Bharti_Public_School",
        thumbnail: "./images/thumbnails/bharathi-public-school.webp",
        url: "https://www.youtube.com/embed/ztuE0jV86to?si=H4_4fOcH21qZ4gBm"
    },
    {
        type: "mp4",
        title: "Bharti Public School Testimonial 1",
        fileName: "Testimonial_Bharti_Public_School_Video_1",
        thumbnail: "./images/thumbnails/dav.webp",
        url: "https://www.youtube.com/embed/7DIzEDbuGfo?si=9I3rrJDS34c8ow9y"
    },
    {
        type: "mp4",
        title: "DAVPS",
        fileName: "DAVPS",
        thumbnail: "./images/thumbnails/avni.webp",
        url: "https://www.youtube.com/embed/EF4vGKMsv3c?si=_KkR3ddyapFIYMk2"
    },
    {
        type: "mp4",
        title: "Laxmi School Testimonial",
        fileName: "Testimonial_Laxmi_School_Video_1",
        thumbnail: "./images/thumbnails/laxmi-global.webp",
        url: "https://www.youtube.com/embed/hTITft9DBg4?si=9-1v0_3V8xHat1uZ"
    },
    {
        type: "mp4",
        title: "Laxmi School Testimonial 2",
        fileName: "Testimonial_Laxmi_School_Video_2",
        thumbnail: "./images/thumbnails/bharti-public-school-1.webp",
        url: "https://www.youtube.com/embed/CbMgbt-NymY?si=ACT-eDPmFp-FOXgv"
    },
     {
        type: "mp4",
        title: "achuta",
        fileName: "T1_2706",
        thumbnail: "./images/thumbnails/achuta.webp",
        url: "https://www.youtube.com/embed/jQwREhJU8_M?si=_JfMdDqTHFsp7EwT"
    },
    // {
    //     type: "mp4",
    //     title: "Testimonial Video 2",
    //     fileName: "T2_2706",
    //     thumbnail: "./images/yp-revolution-3.webp",
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

const pressData = [
    {
        image: "./images/press_page/telegraph.webp",
        alt: "Telegraph",
        title: "Stress on shift to entrepreneurial mindset to spur job growth in future",
        date: "04 Feb 2025",
        link: "https://www.telegraphindia.com/west-bengal/kolkata/stress-on-shift-to-entrepreneurial-mindset-to-spur-job-growth-in-future/cid/2072749"
    },
    {
        image: "./images/press_page/nh.webp",
        alt: "National Herald",
        title: "Future-Ready India: Get Set Learn’s Young Pioneers Launchpad Inspires K-12 Students to Think Beyond Textbooks",
        date: "11 Jul 2025",
        link: "https://nationalheraldnews.com/future-ready-india-get-set-learns-young-pioneers-launchpad-inspires-k-12-students-to-think-beyond-textbooks/"
    },
    {
        image: "./images/press_page/India_today.webp",
        alt: "India Today",
        title: "Cambridge collabs with learning startup to host innovation summit for 150 students",
        date: "08 Jul 2025",
        link: "https://bestcolleges.indiatoday.in/news-detail/cambridge-collabs-with-learning-startup-to-host-innovation-summit-for-150-students-4387"
    },
    {
        image: "./images/press_page/toi.webp",
        alt: "TOI",
        title: "Bridging the skill gap: Cambridge's integrated learning program addresses evolving educational needs, preparing Indian students for future",
        date: "31 Dec 2024",
        link: "https://timesofindia.indiatimes.com/education/news/bridging-the-skill-gap-cambridges-integrated-learning-program-addresses-evolving-educational-needs-preparing-indian-students-for-future-workforce/articleshow/116836986.cms"
    },
    {
        image: "./images/press_page/education-21.webp",
        alt: "Education 21",
        title: "Cambridge’s Integrated Learning and Assessment (ILA) programme to begin with 2025 school curriculum",
        date: "17 Dec 2024",
        link: "https://education21.in/cambridges-integrated-learning-and-assessment-ila-programme-to-begin-with-2025-school-curriculum/"
    },
    {
        image: "./images/press_page/cxo-logo.webp",
        alt: "CXO",
        title: "Beyond Algorithms: How AI Courses Shape the Entrepreneurial Mindset for Success in a Tech-Driven World",
        date: "04 Oct 2024",
        link: "https://cxotoday.com/interviews/beyond-algorithms-how-ai-courses-shape-the-entrepreneurial-mindset-for-success-in-a-tech-driven-world/"
    },
    {
        image: "./images/press_page/fin-express.webp",
        alt: "Fin Express",
        title: "Transforming education: How schools can equip students with 21st-century skills for the future",
        date: "21 Sep 2024",
        link: "https://www.financialexpress.com/jobs-career/education-transforming-education-how-schools-can-equip-students-with-21st-century-skills-for-the-future-3617604/"
    },
    {
        image: "./images/press_page/your-story.webp",
        alt: "Your Story",
        title: "Startup news and updates: Daily roundup (August 16, 2024)",
        date: "16 Aug 2024",
        link: "https://yourstory.com/2024/08/startup-news-and-updates-daily-roundup-august-16-2024"
    },
    {
        image: "./images/press_page/the-hindu.webp",
        alt: "The Hindu",
        title: "Cambridge University Press Partners with Get Set Learn for ‘Young Pioneers’ Entrepreneurial Program",
        date: "15 Aug 2024",
        link: "https://www.thehindu.com/education/news-from-the-world-of-education-august-15-2024/article68527909.ece"
    },
    {
        image: "./images/press_page/press_edtechreivew_online.webp",
        alt: "edtech review",
        title: "Cambridge University and Get Set Learn Launch Entrepreneurial Initiative",
        date: "14 Aug 2024",
        link: "https://www.edtechreview.in/news/cambridge-university-and-get-set-learn-launch-entrepreneurial-initiative/"
    },
    {
        image: "./images/press_page/indiaeducationdiary.webp",
        alt: "Education diary",
        title: "Ahead of Independence Day, Cambridge University Press and Assessment and Get Set Learn announce Young Pioneers programme; aligns with..",
        date: "14 Aug 2024",
        link: "https://indiaeducationdiary.in/ahead-of-independence-day-cambridge-university-press-aligns-with-governments-vision-of-viksit-bharat-and-skill-india/"
    },
    {
        image: "./images/press_page/business-news.webp",
        alt: "business news",
        title: "Cambridge University Press Partners with Get Set Learn for ‘Young Pioneers’ Entrepreneurial Program",
        date: "13 Aug 2024",
        link: "https://businessnewsthisweek.com/news/cambridge-university-press-partners-with-get-set-learn-for-young-pioneers-entrepreneurial-program/"
    }
];


function pressCoverage() {
    const $container = $('#press-container');

    pressData.forEach(item => {
        const block = `
        <div class="col w-30">
          <div class="tab-content-content-block grey-border border-top-right-radius-50 two-pixel-border">
            <div class="news-tab-image-block">
              <img src="${item.image}" alt="${item.alt}">
            </div>
            <div class="tab-content-description">
              ${item.title}
            </div>
            <div class="tab-content-date">
              ${item.date}
            </div>
            <div class="green-button menu">
              <li>
                <a target="_blank" style="width: 100%;" href="${item.link}">READ MORE</a>
              </li>
            </div>
          </div>
        </div>
      `;
        $container.append(block);
    });
}

$(document).ready(function () {
    $("#header-container").load("header.html", function () {
      menuClick();
    });
    // menuClick();
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
    pressCoverage();
    $("#footer-container").load("footer.html");
});

$(window).resize(function () {
    setEqualHeight();
});
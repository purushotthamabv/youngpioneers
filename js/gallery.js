imageGalleryData = {
  "dayOne": [
    "./images/gallery/day-1/1.webp",
    "./images/gallery/day-1/2.webp",
    "./images/gallery/day-1/3.webp",
    "./images/gallery/day-1/4.webp",
    "./images/gallery/day-1/5.webp",
    "./images/gallery/day-1/6.webp",
    "./images/gallery/day-1/7.webp",
    "./images/gallery/day-1/8.webp",
    "./images/gallery/day-1/9.webp",
    "./images/gallery/day-1/11.webp",
    "./images/gallery/day-1/12.webp",
    "./images/gallery/day-1/13.webp",
    "./images/gallery/day-1/14.webp",
    "./images/gallery/day-1/15.webp",
    "./images/gallery/day-1/16.webp",
    "./images/gallery/day-1/17.webp",
    "./images/gallery/day-1/18.webp",
    "./images/gallery/day-1/19.webp",
    "./images/gallery/day-1/20.webp",        
    "./images/gallery/day-1/21.webp",
    "./images/gallery/day-1/23.webp",
    "./images/gallery/day-1/24.webp",
    "./images/gallery/day-1/25.webp",
    "./images/gallery/day-1/26.webp",
    "./images/gallery/day-1/27.webp",
    "./images/gallery/day-1/28.webp",
    "./images/gallery/day-1/29.webp",
    "./images/gallery/day-1/30.webp",
    "./images/gallery/day-1/31.webp",
    "./images/gallery/day-1/32.webp",
  ],
  "dayTwo": [
    "./images/gallery/day-2/1.webp",
    "./images/gallery/day-2/2.webp",
    "./images/gallery/day-2/3.webp",
    "./images/gallery/day-2/4.webp",
    "./images/gallery/day-2/5.webp",
    "./images/gallery/day-2/6.webp",
    "./images/gallery/day-2/7.webp",
    "./images/gallery/day-2/8.webp",
    "./images/gallery/day-2/9.webp",
    "./images/gallery/day-2/10.webp",
    "./images/gallery/day-2/11.webp",
    "./images/gallery/day-2/12.webp",
    "./images/gallery/day-2/13.webp",
    "./images/gallery/day-2/14.webp",
    "./images/gallery/day-2/15.webp",
    "./images/gallery/day-2/16.webp",
    "./images/gallery/day-2/17.webp",
    "./images/gallery/day-2/18.webp",
    "./images/gallery/day-2/19.webp",
    "./images/gallery/day-2/20.webp",
  ]
}

let dayOneLoaded = false;
let dayTwoLoaded = false;

function loadDayOneImages() {
    if (dayOneLoaded) return;
    const dayOneSection = $(".perks-description-section.day-one section");
    $.each(imageGalleryData.dayOne, function (i, src) {
        const img = $('<img>', {
            src: src,
            loading: "lazy",
            alt: ""
        });
        dayOneSection.append(img);
    });

    dayOneLoaded = true;
}

function loadDayTwoImages() {
    if (dayTwoLoaded) return;

    const dayTwoSection = $(".perks-description-section.day-two section");
    $.each(imageGalleryData.dayTwo, function (i, src) {
        const img = $('<img>', {
            src: src,
            loading: "lazy",
            alt: ""
        });
        dayTwoSection.append(img);
    });

    dayTwoLoaded = true;
}


function imageGallery() {
    // Use event delegation so it works on dynamically added images too
    $(document).on("click", "section img", function () {
        $(".lightbox").fadeIn(300);
        $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
        $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
        $(".title").append("<h1>" + $(this).attr("alt") + "</h1>");
        $("html").css("overflow", "hidden");

        const allImgs = $("section").find("img");
        const currentIndex = allImgs.index(this);

        $(".arrowr").toggle(currentIndex < allImgs.length - 1);
        $(".arrowl").toggle(currentIndex > 0);
    });

    $(".close").click(function () {
        $(".lightbox").fadeOut(300);
        $(".lightbox img").remove();
        $(".title h1").remove();
        $("html").css("overflow", "auto");
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(".lightbox").fadeOut(300);
            $(".lightbox img").remove();
            $(".title h1").remove();
            $("html").css("overflow", "auto");
        }
    });

    $(".arrowr").click(function () {
        const currentSrc = $(".lightbox img").attr("src");
        const allImgs = $("section").find("img");
        const currentIndex = allImgs.index($(`img[src='${currentSrc}']`));
        const nextImg = allImgs.eq(currentIndex + 1);

        if (nextImg.length) {
            $(".lightbox img").attr("src", nextImg.attr("src"));
            $(".filter").css("background-image", "url(" + nextImg.attr("src") + ")");
            $(".title h1").html(nextImg.attr("alt"));
            $(".arrowr").toggle(currentIndex + 1 < allImgs.length - 1);
            $(".arrowl").show();
        }
    });

    $(".arrowl").click(function () {
        const currentSrc = $(".lightbox img").attr("src");
        const allImgs = $("section").find("img");
        const currentIndex = allImgs.index($(`img[src='${currentSrc}']`));
        const prevImg = allImgs.eq(currentIndex - 1);

        if (prevImg.length) {
            $(".lightbox img").attr("src", prevImg.attr("src"));
            $(".filter").css("background-image", "url(" + prevImg.attr("src") + ")");
            $(".title h1").html(prevImg.attr("alt"));
            $(".arrowl").toggle(currentIndex - 1 > 0);
            $(".arrowr").show();
        }
    });
}


function galleryLoader(imagesSelector) {
    var images = $(imagesSelector);
    var imagesCount = images.length;
    var imagesLoaded = 0;

    function updateProgress() {
        var percentage = (imagesLoaded / imagesCount) * 100;
        $('.loading-wrapper #loading-text').text('Loading ' + Math.round(percentage) + '%');
    }

    function allImagesLoaded() {
        imagesLoaded++;
        updateProgress();

        if (imagesLoaded === imagesCount) {
            $('.loading-wrapper').hide();
        }
    }

    $('.loading-wrapper').show();

    images.each(function () {
        if (this.complete) {
            allImagesLoaded();
        } else {
            $(this).on('load', allImagesLoaded);
        }
    });
}

function galleryTab() {
    $(document).on('click', '.package-item', function (e) {
        e.preventDefault();
        var index = $(this).index();

        if (!$(this).hasClass('active')) {
            $('.package-item').removeClass('active');
            $(this).addClass('active');

            $('.tab-content').hide().eq(index).show();
            $('.tab-content-1').hide().eq(index).show();

            if (index === 1) {
                loadDayTwoImages();
                galleryLoader('.day-two img');
            } else {
                loadDayOneImages();
                galleryLoader('.day-one img');
            }
        }
    });
}

$(document).ready(function () {
    loadDayOneImages(); // Load only once
    imageGallery();
    galleryLoader('.day-one img'); // Load only day one initially
    galleryTab();
});
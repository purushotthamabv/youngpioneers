function fetchFaqs() {
    var faqs = [
        {
            question: "What is the Young Pioneers Launchpad?",
            answer: "The Launchpad is the final event of the Young Pioneers Programme, where selected student teams pitch their business ideas to a jury of industry experts. It showcases entrepreneurial thinking, teamwork, and innovation."
        },
        {
            question: "Who can participate in the Young Pioneers Launchpad?",
            answer: "Students from Grades 7 to 10 enrolled in the Young Pioneers programme who have crossed the milestones of Quiz, Mentorship, and Online Jury Round."
        },
        {
            question: "What are the eligibility criteria for students?",
            answer: "Completion of the Young Pioneers curriculum, participation in masterclasses and mentorships, and submission of the complete business plan."
        },
        {
            question: "How are the student teams selected for the Young Pioneers Launchpad Grand Finale?",
            answer: "39 student teams will pitch on Day 1 of the Launchpad competing against each other. Out of which, 10 teams will be shortlisted for the Grand Finale happening on Day 2."
        },
        {
            question: "Is there a registration fee for participation?",
            answer: "No additional fee. Participation is covered under the annual programme enrollment."
        },
        {
            question: "What is the format of the final event?",
            answer: "It is a hybrid event with keynote sessions, live pitches, product showcases, and the award ceremony. The event will be conducted both on-ground and via Zoom or any of the alternatives and will also be live streamed."
        },
        {
            question: "Where and when will Young Pioneers Launchpad 2025 be held?",
            answer: "June 28th and 29th, 2025, hybrid format. Final venue TBA by June 16th, 2025."
        },
        {
            question: "Will students receive certificates or awards?",
            answer: "Yes. All participants will receive certificates. The top 5 teams get winners' trophies, while there are other awards which include categories like Best Pitch, Most Innovative Idea, etc."
        },
        {
            question: "How can I register for Young Pioneers Launchpad?",
            answer: "Students are nominated by schools; no independent registration is required."
        },
        {
            question: "How can schools or individuals stay updated?",
            answer: `Visit <a href="https://www.youngpioneers.in" target="_blank" rel="noopener noreferrer">www.youngpioneers.in</a>, Email at - 
            <a href="mailto:gsl.operations@getsetlearn.info">gsl.operations@getsetlearn.info</a> OR 
            <a href="mailto:sumit.m@getsetlearn.info">sumit.m@getsetlearn.info</a>`
        },
        {
            question: "I'm unable to attend the event in person. Can I watch it live?",
            answer: "Yes, the event will be streamed live on our official social media platforms. Stay connected with us for streaming links and schedule updates."
        }
    ];




    function addFaqsToAccordion(startIndex, count) {
        for (var i = startIndex; i < startIndex + count; i++) {
            if (i >= faqs.length) break;

            var faq = faqs[i];

            var faqWrap = $(`<div class="AccWrap panel"></div>`);
            var faqWrapInner = $(`<div class="AccWrapInr"></div>`);
            var faqHeader = $(`<div class="AccHdr panel-header position-relative">${i + 1}. ${faq.question}  <span class="toggle-symbol"></span></div>`);
            var faqContent = $(`<div class="AccCont"><div class="t-p">${faq.answer}</div></div>`);

            faqWrapInner.append(faqHeader, faqContent);
            faqWrap.append(faqWrapInner);
            $(".accordion").append(faqWrap);
        }
    }

    addFaqsToAccordion(0, faqs.length);
}

function accordion() {
    $(document).on('click', '.AccHdr', function () {
        var $this = $(this);
        var $wrap = $this.parent('.AccWrapInr');
        var $symbol = $this.find('.toggle-symbol');

        if ($this.hasClass('clicked')) {
            // Close currently open section
            $this.removeClass('clicked');
            $wrap.find('.AccCont').slideUp();
            $wrap.removeClass('accordion-outerwrap');
        } else {
            // Close all sections
            $('.AccHdr').removeClass('clicked');
            $('.AccCont').slideUp();
            $('.AccWrapInr').removeClass('accordion-outerwrap');

            // Open clicked section
            $this.addClass('clicked');
            $wrap.find('.AccCont').slideDown();
            $wrap.addClass('accordion-outerwrap');
        }
    });
}

function renderSpeakersSection() {
    const speakersData = [
        {
            id: "popup-harnidh",
            name: "Harnidh Kaur",
            imageSmall: "./images/harnidh-small.png",
            imageLarge: "./images/harnidh-large.png",
            bgColor: "#ff6daf",
            title: "Harnidh Kaur",
            designation: "Head of Fund at WTFund | Social Media Influencer | Author",
            description: `Harnidh Kaur is the Head of Fund at WTFund, a programme founded by
                entrepreneur & investor - Nikhil Kamath, that focuses on supporting
                entrepreneurs under the age of 25.
                <br>
                <br>
                She is also a dynamic poet who published her first book at the age of 20,
                and has since built a strong online presence with over 48,000 followers on
                Instagram.`,
            borderClass: ""
        },
        {
            id: "popup-khatwani",
            name: "Vik Khatwani",
            imageSmall: "./images/khatwani-small.png",
            imageLarge: "./images/khatwani-large.png",
            bgColor: "#ff8906",
            title: "Vik Khatwani",
            designation: "Founder & Creator at Earth Cafe",
            description: `Vik and Pooja Khatwani have always shared a deep passion for healthy and delicious food. Their journey began with a simple dream: to create a place where quality ingredients and culinary creativity come together to offer an extraordinary dining experience. With backgrounds in both business and culinary arts, they combined their skills and vision to bring Earth Café to life.
                <br><br>
                Their commitment to sustainability and well-being is at the heart of everything they do. Vik and Pooja believe that food should not only taste great but also nourish the body and soul. Earth Café is their way of sharing this philosophy with the world, creating a community space where everyone can enjoy wholesome, delightful meals in a warm and welcoming environment.`,
            borderClass: "orange-border"
        },
        {
            id: "popup-arun",
            name: "Arun Rajamani",
            imageSmall: "./images/arun-small.png",
            imageLarge: "./images/arun-large.png",
            bgColor: "#ff8906",
            title: "Arun Rajamani",
            designation: "Managing Director at Cambridge University Press & Assessment, South Asia",
            description: `Arun Rajamani is the Managing Director for South Asia at Cambridge
                University Press & Assessment, committed to transforming societies through
                education. With over two decades of experience in education and training,
                his area of focus is on driving innovation in learning, research, and
                assessment to build a better future.`,
            borderClass: "orange-border"
        },
        {
            id: "popup-priyavrat",
            name: "Priyavrata Mafatlal",
            imageSmall: "./images/priyavrata-small.png",
            imageLarge: "./images/priyavrata-large.png",
            bgColor: "#ff6eb0",
            title: "Priyavrata Mafatlal",
            designation: "Co-Founder, Get Set Learn & Vice Chairman, Arvind Mafatlal Group",
            description: `Priyavrata Mafatlal, an industrialist and fifth generation entrepreneur, is
                the Vice-Chairman of the Arvind Mafatlal Group. In addition, he is also the
                Managing Director of Mafatlal Industries Limited, one of India's oldest
                textile companies, as well as a Director at NOCIL Limited, which is India's
                largest manufacturer of specialty rubber chemicals.`,
            borderClass: ""
        },
        {
            id: "popup-ameet",
            name: "Ameet Zaveri",
            imageSmall: "./images/ameet-small.png",
            imageLarge: "./images/ameet-large.png",
            bgColor: "#804dd4",
            title: "Ameet Zaveri",
            designation: "CEO & Co-founder, Get Set Learn",
            description: `Ameet Zaveri is a visionary entrepreneur, celebrated for his leadership in
                B2C E-commerce, mobile education, and consumer internet sectors. He
                currently serves as Co-Founder and CEO of Get Set Learn, an Arvind Mafatlal
                Group Company, pioneering the world's 21st century skills platform for
                schools and students.`,
            borderClass: "blue-border"
        },
        {
            id: "popup-sheenu",
            name: "Dr. Sheenu Jain",
            imageSmall: "./images/sheenu-small.png",
            imageLarge: "./images/Sheenu-large.png",
            bgColor: "#ff8906",
            title: "Dr. Sheenu Jain",
            designation: "Founder, Skairos & Centre Lead, LCE",
            description: `Dr. Sheenu Jain is a distinguished academic and entrepreneur. Her expertise
                includes curriculum design, managing startups, setting up entrepreneurship
                and incubation centers, establishing brand stores, and creating E-cells. She
                was selected by Goldman Sachs & London Business School for training 10,000
                women entrepreneurs in India.
                <br>
                <br>
                She has a PhD in Green Marketing and was recognized as a Young Management
                Scholar by IIM Calcutta. She also has a MCom, and MSc (Applied Psychology),
                along with certifications in Entrepreneurship education, mentoring, and
                training from ISB Hyderabad and the National Entrepreneurship Network.`,
            borderClass: "orange-border"
        },
        {
            id: "popup-anoushka",
            name: "Anoushka Jollyy",
            imageSmall: "./images/anoushka-small.png",
            imageLarge: "./images/anoushka-large.png",
            bgColor: "#ff6daf",
            title: "Anoushka Jollyy",
            designation: "Founder, Kavach App",
            description: `Anoushka Jollyy is a 15-year-old founder of the Kavach App, a mental health app designed for adolescents aged 8 to 17. A social entrepreneur since the age of 9, Anoushka is also the youngest winner on Shark Tank India, securing ₹50 lakhs in investment and is a recipient of the Pradhan Mantri Rashtriya Bal Puraskar, one of India’s highest honors for children, awarded by the Prime Minister and President of India.`,
            borderClass: "pink-border"
        },
        {
            id: "popup-harsh",
            name: "Harsh Songra",
            imageSmall: "./images/harsh-small.png",
            imageLarge: "./images/harsh-large.png",
            bgColor: "#804dd4",
            title: "Harsh Songra",
            designation: "CEO & Founder at MyChild App | Head of Technology at Qyuki Digital Media",
            description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
                focused on early childhood screening and disability inclusion. A Forbes 30
                Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
                activist.
                <br>
                <br>
                Currently, he is the Head of Technology at Qyuki Digital Media, where he
                builds ML infrastructure to enable smarter decision-making. With over 8
                years of experience in tech and advocacy, Harsh continues to inspire change
                through innovation and storytelling.`,
            borderClass: "blue-border"
        },
        {
            id: "popup-raunak",
            name: "Raunak Gulati",
            imageSmall: "./images/raunak-small.png",
            imageLarge: "./images/raunak-large.png",
            bgColor: "#ff8906",
            title: "Raunak Gulati",
            designation: "Founder & CEO at Horse's Mouth (acqui-hired by Yocket)",
            description: `Raunak Ash Gulati is the Founder and CEO of Horse's Mouth. He holds a passion for product analytics and growth hacking, pioneering unconventional go-to-market strategies to capture high-CAC educational markets. Raunak led Horse's Mouth from bootstrap to a successful acqui-hire by India's leading study-abroad platform - Yocket, scaling user engagement through video calls and chat while maintaining cost-efficient customer acquisition.`,
            borderClass: "orange-border"
        },
        {
            id: "popup-arundhati",
            name: "Arundhati Kumar",
            imageSmall: "./images/arundathi-small.png",
            imageLarge: "./images/arundathi-large.png",
            bgColor: "#ff6daf",
            title: "Arundhati Kumar",
            designation: "Founder, Reverse The Stripes",
            description: `Arundhati Kumar is a sustainability strategist, entrepreneur, and former leadership coach with over two decades of experience. After 17 years working with CEOs and business leaders to enhance performance and leadership, she pivoted to climate action and founded Beej, India’s first plant-based premium accessories brand.
                <br>
                <br>        
                Her journey led to the creation of Reverse The Stripes (RTS), a consulting practice focused on climate storytelling, sustainable business integration, and socially inclusive CSR strategies. A passionate speaker and mentor, Arundhati advocates for conscious consumption, sustainability, and systems change.`,
            borderClass: ""
        },
        {
            id: "popup-vishal",
            name: "Vishal Kumar",
            imageSmall: "./images/vishal-small.png",
            imageLarge: "./images/vishal-large.png",
            bgColor: "",
            title: "Vishal Kumar",
            designation: "CEO, Waste Warriors",
            description: `Vishal Kumar is the CEO of Waste Warriors, a non-profit organization
                dedicated to safeguarding the pristine Indian Himalayas from solid waste.
                Under his leadership, Waste Warriors has earned Waste Warriors international
                recognition, including the prestigious Keeling Curve Prize, cementing its
                position as a pioneer in climate change mitigation.
                Vishal has a Bachelor’s in Material Science from the Indian Institute of
                Technology, Varanasi (formerly Banaras Hindu University).`,
            borderClass: "blue-border"
        },
    ];

    const $container = $(".speakers-container");

    speakersData.forEach((f) => {
        const block = `
        <div class="single-founder-block">
            <div class="founder-image">
                <img src="${f.imageSmall}" alt="${f.name}" ${f.bgColor ? `style="background-color: ${f.bgColor};"` : ""}>
            </div>
            <div class="founder-content ${f.borderClass}">
                <div class="founder-title">${f.name}</div>
                <div class="founder-designation">${f.designation}</div>
                <div class="learn-more" data-popup="${f.id}">LEARN MORE</div>
            </div>
        </div>
    `;
        $container.append(block);
    });

    speakersData.forEach(speaker => {
        const popupHtml = `
        <div class="popup" id="${speaker.id}">
            <div class="popup-content">
            <span class="close-btn"></span>
            <div class="two-col-block display-flex align-items-center">
                <div class="col-left w-30 col testimonial-image">
                <img src="${speaker.imageLarge}" alt="${speaker.name}" class="show-desktop" style="background-color: ${speaker.bgColor || 'transparent'};">
                <img src="${speaker.imageSmall}" alt="${speaker.name}" class="show-mobile" style="background-color: ${speaker.bgColor || 'transparent'};">
                </div>
                <div class="col-right col w-70">
                <div class="tab-content-content-block">
                    <div class="tab-content-title">${speaker.title}</div>
                    <div class="tab-content-description">${speaker.description}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        `;
        $('#popup-container').append(popupHtml);
    });

    if ($container.hasClass('owl-carousel')) {
        $container.owlCarousel({
            items: 3,
            margin: 40,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            }
        });
    }

    $('.learn-more').on('click', function () {
        const popupId = $(this).data('popup');
        $('#' + popupId).fadeIn();
        $('body').addClass('no-scroll');
    });

    // Handle closing
    $(document).on('click', '.popup .close-btn', function () {
        $(this).closest('.popup').fadeOut();
        $('body').removeClass('no-scroll');
    });

    // Optional: click outside to close
    $(document).on('click', '.popup', function (e) {
        if ($(e.target).is('.popup')) {
            $(this).fadeOut();
            $('body').removeClass('no-scroll');
        }
    });
}

function downloadAgenda() {
    const fileUrl = './launchpad_agenda.pdf';

    window.open(fileUrl, '_blank');

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'launchpad_agenda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

$(document).ready(function () {
    fetchFaqs();
    accordion();
    renderSpeakersSection();
})
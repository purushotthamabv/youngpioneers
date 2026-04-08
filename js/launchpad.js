function fetchFaqs() {
    var faqs = [
        {
            question: "What is the Young Pioneers Launchpad?",
            answer: `The Young Pioneers Launchpad is the final showcase of the teams enrolled under the <span style='font-weight:bold'>Young Pioneers Programme,</span> — a three-part entrepreneurship curriculum designed for students studying in Grades 7 to 10.
                <br><br>
                The programme runs across three levels: <span style='font-weight:bold'>Beginner · Intermediate · Advanced </span>
                <br><br>
                After months of textbook-led learning, collaborating, and receiving expert mentorship, shortlisted teams pitch their original business ideas on a national platform.
                <br><br>
                <span style='font-weight:bold'>This year, Beginner and Intermediate teams will take the stage at the Indian Institute of Science, Bangalore. </span>`
        },
        {
            question: "Who can participate?",
            answer: "Students from Grades 7 to 10 enrolled in the Young Pioneers Programme who have cleared the milestones of Textbook learning, Mentorship, and Online Jury Rounds. "
        },
        {
            question: "What are the eligibility criteria? ",
            answer: "Completion of the Young Pioneers curriculum, participation in masterclasses and mentorships, and submission of a complete business plan."
        },
        {
            question: "How are teams selected?",
            answer: "30+ shortlisted teams across Beginner and Intermediate levels pitch their original business ideas before a jury of entrepreneurs and industry leaders."
        },
        {
            question: "Is there a registration fee? ",
            answer: "No additional fee. Participation is covered under the annual programme enrollment."
        },
        {
            question: "What is the format?",
            answer: "A one-day in-person event with sessions, live pitches, and an award ceremony. The event will also be live streamed for schools and parents."
        },
        {
            question: "Will students receive certificates or awards?",
            answer: "Yes. All participants receive certificates co-branded by Get Set Learn and Cambridge University Press & Assessment. Winning teams receive trophies and national recognition."
        },
        {
            question: "How are students registered?",
            answer: "Students are nominated by their schools. No independent registration is required."
        },
        {
            question: "How can schools stay updated? ",
            answer: `Visit our social media pages for updates or write to <a href="mailto:gsl.operations@getsetlearn.info">gsl.operations@getsetlearn.info</a>`
        },
        {
            question: "Can I watch if I can't attend in person?",
            answer: `Yes. The event will be live streamed. Follow us on our official social media platforms for streaming links and updates on Linkedin and Instagram.`
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

const speakersData = [
    {
        id: "popup-nirmala",
        name: "Dr. Nirmala Krishnan",
        imageSmall: "./images/nirmala-krishnan.webp",
        imageLarge: "./images/nirmala-krishnan.webp",
        bgColor: "#804dd4",
        title: "Dr. Nirmala Krishnan",
        designation: "Entrepreneur & Consultant · Exec. Director, Link The Dots",
        linkedIn: "https://www.linkedin.com/in/dr-nirmala-krishnan-060ba57a/",
        // description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
        //     focused on early childhood screening and disability inclusion. A Forbes 30
        //     Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
        //     activist.
        //     <br>
        //     <br>
        //     Currently, he is the Head of Technology at Qyuki Digital Media, where he
        //     builds ML infrastructure to enable smarter decision-making. With over 8
        //     years of experience in tech and advocacy, Harsh continues to inspire change
        //     through innovation and storytelling.`,
        borderClass: "blue-border"
    },
    {
        id: "popup-bindhu",
        name: "Bindu Subramaniam",
        imageSmall: "./images/bindu-subramani.webp",
        imageLarge: "./images/bindu-subramani.webp",
        bgColor: "#ff6daf",
        title: "Bindu Subramaniam",
        designation: "CEO & Founder, SaPa in Schools",
        linkedIn: "https://www.linkedin.com/in/bindusub/",
        // description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
        //     focused on early childhood screening and disability inclusion. A Forbes 30
        //     Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
        //     activist.
        //     <br>
        //     <br>
        //     Currently, he is the Head of Technology at Qyuki Digital Media, where he
        //     builds ML infrastructure to enable smarter decision-making. With over 8
        //     years of experience in tech and advocacy, Harsh continues to inspire change
        //     through innovation and storytelling.`,
        borderClass: "pink-border"
    },
    {
        id: "popup-pradeep",
        name: "Dr. Pradeep Pendse",
        imageSmall: "./images/pradeep.webp",
        imageLarge: "./images/pradeep.webp",
        bgColor: "#ff8906",
        title: "Dr. Pradeep Pendse",
        designation: "In-Charge Director & CTO, Weschool",
        linkedIn: "https://www.linkedin.com/in/pradeep-pendse-phd-5a2338/",
        // description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
        //     focused on early childhood screening and disability inclusion. A Forbes 30
        //     Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
        //     activist.
        //     <br>
        //     <br>
        //     Currently, he is the Head of Technology at Qyuki Digital Media, where he
        //     builds ML infrastructure to enable smarter decision-making. With over 8
        //     years of experience in tech and advocacy, Harsh continues to inspire change
        //     through innovation and storytelling.`,
        borderClass: "orange-border"
    },
    {
        id: "popup-swathy",
        name: "Swathy Rohit",
        imageSmall: "./images/swathy.webp",
        imageLarge: "./images/swathy.webp",
        bgColor: "#804dd4",
        title: "Swathy Rohit",
        designation: "Co-founder & CEO, Health Basix",
        linkedIn: "https://www.linkedin.com/in/swathyrohit/",
        // description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
        //     focused on early childhood screening and disability inclusion. A Forbes 30
        //     Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
        //     activist.
        //     <br>
        //     <br>
        //     Currently, he is the Head of Technology at Qyuki Digital Media, where he
        //     builds ML infrastructure to enable smarter decision-making. With over 8
        //     years of experience in tech and advocacy, Harsh continues to inspire change
        //     through innovation and storytelling.`,
        borderClass: "blue-border"
    },
    // {
    //     id: "popup-harsh",
    //     name: "Harsh Songra",
    //     imageSmall: "./images/harsh-small.webp",
    //     imageLarge: "./images/harsh-large.webp",
    //     bgColor: "#804dd4",
    //     title: "Harsh Songra",
    //     designation: "CEO & Founder at MyChild App | Head of Technology at Qyuki Digital Media",
    //     description: `Harsh Songra is the Founder CEO of MyChild App and We, Included, platforms
    //         focused on early childhood screening and disability inclusion. A Forbes 30
    //         Under 30 honoree (India & Asia), Harsh is also a TEDx speaker and disability
    //         activist.
    //         <br>
    //         <br>
    //         Currently, he is the Head of Technology at Qyuki Digital Media, where he
    //         builds ML infrastructure to enable smarter decision-making. With over 8
    //         years of experience in tech and advocacy, Harsh continues to inspire change
    //         through innovation and storytelling.`,
    //     borderClass: "blue-border"
    // },
    // {
    //     id: "popup-anoushka",
    //     name: "Anoushka Jollyy",
    //     imageSmall: "./images/anoushka-small.webp",
    //     imageLarge: "./images/anoushka-large.webp",
    //     bgColor: "#ff6daf",
    //     title: "Anoushka Jollyy",
    //     designation: "Founder, Kavach App",
    //     description: `Anoushka Jollyy is a 15-year-old founder of the Kavach App, a mental health app designed for adolescents aged 8 to 17. A social entrepreneur since the age of 9, Anoushka is also the youngest winner on Shark Tank India, securing ₹50 lakhs in investment and is a recipient of the Pradhan Mantri Rashtriya Bal Puraskar, one of India’s highest honors for children, awarded by the Prime Minister and President of India.`,
    //     borderClass: "pink-border"
    // },

    // {
    //     id: "popup-raunak",
    //     name: "Raunak Gulati",
    //     imageSmall: "./images/raunak-small.webp",
    //     imageLarge: "./images/raunak-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Raunak Gulati",
    //     designation: "Founder & CEO at Horse's Mouth (acqui-hired by Yocket)",
    //     description: `Raunak Ash Gulati is the Founder and CEO of Horse's Mouth. He holds a passion for product analytics and growth hacking, pioneering unconventional go-to-market strategies to capture high-CAC educational markets. Raunak led Horse's Mouth from bootstrap to a successful acqui-hire by India's leading study-abroad platform - Yocket, scaling user engagement through video calls and chat while maintaining cost-efficient customer acquisition.`,
    //     borderClass: "orange-border"
    // },
    // {
    //     id: "popup-harnidh",
    //     name: "Harnidh Kaur",
    //     imageSmall: "./images/harnidh-small.webp",
    //     imageLarge: "./images/harnidh-large.webp",
    //     bgColor: "#ff6daf",
    //     title: "Harnidh Kaur",
    //     designation: "Head of Fund at WTFund | Social Media Influencer | Author",
    //     description: `Harnidh Kaur is the Head of Fund at WTFund, a programme founded by
    //         entrepreneur & investor - Nikhil Kamath, that focuses on supporting
    //         entrepreneurs under the age of 25.
    //         <br>
    //         <br>
    //         She is also a dynamic poet who published her first book at the age of 20,
    //         and has since built a strong online presence with over 48,000 followers on
    //         Instagram.`,
    //     borderClass: ""
    // },
    // {
    //     id: "popup-khatwani",
    //     name: "Vik Khatwani",
    //     imageSmall: "./images/khatwani-small.webp",
    //     imageLarge: "./images/khatwani-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Vik Khatwani",
    //     designation: "Founder & Creator at Earth Cafe",
    //     description: `Vik and Pooja Khatwani have always shared a deep passion for healthy and delicious food. Their journey began with a simple dream: to create a place where quality ingredients and culinary creativity come together to offer an extraordinary dining experience. With backgrounds in both business and culinary arts, they combined their skills and vision to bring Earth Café to life.
    //         <br><br>
    //         Their commitment to sustainability and well-being is at the heart of everything they do. Vik and Pooja believe that food should not only taste great but also nourish the body and soul. Earth Café is their way of sharing this philosophy with the world, creating a community space where everyone can enjoy wholesome, delightful meals in a warm and welcoming environment.`,
    //     borderClass: "orange-border"
    // },
    // {
    //     id: "popup-arun",
    //     name: "Arun Rajamani",
    //     imageSmall: "./images/arun-small.webp",
    //     imageLarge: "./images/arun-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Arun Rajamani",
    //     designation: "Managing Director at Cambridge University Press & Assessment, South Asia",
    //     description: `Arun Rajamani is the Managing Director for South Asia at Cambridge
    //         University Press & Assessment, committed to transforming societies through
    //         education. With over two decades of experience in education and training,
    //         his area of focus is on driving innovation in learning, research, and
    //         assessment to build a better future.`,
    //     borderClass: "orange-border"
    // },
    // {
    //     id: "popup-priyavrat",
    //     name: "Priyavrata Mafatlal",
    //     imageSmall: "./images/priyavrata-small.webp",
    //     imageLarge: "./images/priyavrata-large.webp",
    //     bgColor: "#ff6eb0",
    //     title: "Priyavrata Mafatlal",
    //     designation: "Co-Founder, Get Set Learn & Vice Chairman, Arvind Mafatlal Group",
    //     description: `Priyavrata Mafatlal, an industrialist and fifth generation entrepreneur, is
    //         the Vice-Chairman of the Arvind Mafatlal Group. In addition, he is also the
    //         Managing Director of Mafatlal Industries Limited, one of India's oldest
    //         textile companies, as well as a Director at NOCIL Limited, which is India's
    //         largest manufacturer of specialty rubber chemicals.`,
    //     borderClass: ""
    // },
    // {
    //     id: "popup-ameet",
    //     name: "Ameet Zaveri",
    //     imageSmall: "./images/ameet-small.webp",
    //     imageLarge: "./images/ameet-large.webp",
    //     bgColor: "#804dd4",
    //     title: "Ameet Zaveri",
    //     designation: "CEO & Co-founder, Get Set Learn",
    //     description: `Ameet Zaveri is a visionary entrepreneur, celebrated for his leadership in
    //         B2C E-commerce, mobile education, and consumer internet sectors. He
    //         currently serves as Co-Founder and CEO of Get Set Learn, an Arvind Mafatlal
    //         Group Company, pioneering the world's 21st century skills platform for
    //         schools and students.`,
    //     borderClass: "blue-border"
    // },
    // {
    //     id: "popup-sheenu",
    //     name: "Dr. Sheenu Jain",
    //     imageSmall: "./images/sheenu-small.webp",
    //     imageLarge: "./images/Sheenu-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Dr. Sheenu Jain",
    //     designation: "Founder, Skairos & Centre Lead, LCE",
    //     description: `Dr. Sheenu Jain is a distinguished academic and entrepreneur. Her expertise
    //         includes curriculum design, managing startups, setting up entrepreneurship
    //         and incubation centers, establishing brand stores, and creating E-cells. She
    //         was selected by Goldman Sachs & London Business School for training 10,000
    //         women entrepreneurs in India.
    //         <br>
    //         <br>
    //         She has a PhD in Green Marketing and was recognized as a Young Management
    //         Scholar by IIM Calcutta. She also has a MCom, and MSc (Applied Psychology),
    //         along with certifications in Entrepreneurship education, mentoring, and
    //         training from ISB Hyderabad and the National Entrepreneurship Network.`,
    //     borderClass: "orange-border"
    // },
    // {
    //     id: "popup-arundhati",
    //     name: "Arundhati Kumar",
    //     imageSmall: "./images/arundathi-small.webp",
    //     imageLarge: "./images/arundathi-large.webp",
    //     bgColor: "#ff6daf",
    //     title: "Arundhati Kumar",
    //     designation: "Founder, Reverse The Stripes",
    //     description: `Arundhati Kumar is a sustainability strategist, entrepreneur, and former leadership coach with over two decades of experience. After 17 years working with CEOs and business leaders to enhance performance and leadership, she pivoted to climate action and founded Beej, India’s first plant-based premium accessories brand.
    //         <br>
    //         <br>        
    //         Her journey led to the creation of Reverse The Stripes (RTS), a consulting practice focused on climate storytelling, sustainable business integration, and socially inclusive CSR strategies. A passionate speaker and mentor, Arundhati advocates for conscious consumption, sustainability, and systems change.`,
    //     borderClass: ""
    // },
    // {
    //     id: "popup-vishal",
    //     name: "Vishal Kumar",
    //     imageSmall: "./images/vishal-small.webp",
    //     imageLarge: "./images/vishal-large.webp",
    //     bgColor: "",
    //     title: "Vishal Kumar",
    //     designation: "CEO, Waste Warriors",
    //     description: `Vishal Kumar is the CEO of Waste Warriors, a non-profit organization
    //         dedicated to safeguarding the pristine Indian Himalayas from solid waste.
    //         Under his leadership, Waste Warriors has earned Waste Warriors international
    //         recognition, including the prestigious Keeling Curve Prize, cementing its
    //         position as a pioneer in climate change mitigation.
    //         Vishal has a Bachelor’s in Material Science from the Indian Institute of
    //         Technology, Varanasi (formerly Banaras Hindu University).`,
    //     borderClass: "blue-border"
    // },
    // {
    //     id: "popup-rithu",
    //     name: "Dr. Ritu Uppal",
    //     imageSmall: "./images/ritu-small.webp",
    //     imageLarge: "./images/ritu-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Dr. Ritu Uppal",
    //     designation: "Chief Academics Officer, Get Set Learn ",
    //     description: `Dr. Ritu Uppal is an experienced educational technologist with a strong background in the edtech industry. Her expertise spans MOOCs, Curriculum and course design and development and the implementation in face-to-face, blended, and e-learning environments. She is skilled in instructional design across all educational levels and is adept at needs analysis, dipstick analysis, and change management in both K-12 and higher education settings.`,
    //     borderClass: "blue-border"
    // },
    // {
    //     id: "popup-ashish",
    //     name: "Ashish Arora",
    //     imageSmall: "./images/ashish-small.webp",
    //     imageLarge: "./images/ashish-large.webp",
    //     bgColor: "#ff8906",
    //     title: "Ashish Arora",
    //     designation: "SVP, Cambridge University Press & Assessment",
    //     description: `A passionate executive in the education sector, with over 20 years of experience driving transformation at the intersection of learning and technology. With a strong track record in building and scaling educational products and businesses, building partnerships, and leading high-performance teams, Ashish has led large-scale initiatives that enhance user engagement, institutional growth, and digital transformation, ensuring learning is accessible, impactful, and future-ready.`,
    //     borderClass: "orange-border"
    // },
];

function renderCardSection({ containerSelector, data }) {
    const $container = $(containerSelector);

    // ✅ FIX: destroy existing owl
    if ($container.hasClass('owl-loaded')) {
        $container.trigger('destroy.owl.carousel');
        $container.removeClass('owl-loaded');
        $container.find('.owl-stage-outer').children().unwrap();
    }

    $container.empty();

    data.forEach((item) => {
        const block = `
        <div class="single-founder-block">
            <div class="founder-image">
                <img src="${item.imageSmall}" alt="${item.name}">
            </div>

            <div class="founder-content ${item.borderClass || ""}">
                <div class="founder-title">${item.name}</div>
                <div class="founder-designation">${item.designation}</div>

                <div style="min-height:29px;">
                    ${item.linkedIn
                ? `<a href="${item.linkedIn}" target="_blank" class="learn-more">LEARN MORE</a>`
                : ""
            }
                </div>
            </div>
        </div>`;

        $container.append(block);
    });

    // ✅ Owl init
    $container.owlCarousel({
        items: 3,
        margin: 40,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
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

const sliderData = [
    {
        image: "./images/slide-1.webp",
        title: "Young Pioneers",
        subtitle: "Build your future"
    },
    {
        image: "./images/slide-2.webp",
        title: "Launchpad 2026",
        subtitle: "Showcase your ideas"
    },
];

function renderFullSlider() {
    const $container = $(".full-slider");

    // Prevent duplicate init
    if ($container.hasClass('owl-loaded')) {
        $container.trigger('destroy.owl.carousel');
        $container.removeClass('owl-loaded');
        $container.find('.owl-stage-outer').children().unwrap();
    }

    $container.empty();

    sliderData.forEach((item) => {
        const slide = `
        <div class="slide-item border-top-left-radius-100 border-bottom-right-radius-100" style='overflow:hidden'>
            <img src="${item.image}" alt="${item.title}">  
        </div>
        `;

        $container.append(slide);
    });

    // Init Owl
    $container.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800
    });
}

$(document).ready(function () {
    fetchFaqs();
    accordion();
    renderFullSlider();
    // Speakers
    renderCardSection({
        containerSelector: ".speakers-container",
        data: speakersData
    });

    // Founders (REPLICA)
    // renderCardSection({
    //     containerSelector: ".founders-section",
    //     data: foundersData
    // });
})
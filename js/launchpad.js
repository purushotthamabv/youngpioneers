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
            var faqHeader = $(`<div class="AccHdr panel-header position-relative">${i+1}. ${faq.question}  <span class="toggle-symbol"></span></div>`);
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

$(document).ready(function () {
    fetchFaqs();
    accordion();
})
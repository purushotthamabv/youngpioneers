function fetchFaqs() {
    var faqs = [
        {
            question: "Who can participate in the Launchpad Awards?",
            answer: "The awards are open to students enrolled in the Young Pioneers program, typically in grades 7 to 10. Participation is based on project submission and completion of key milestones in the entrepreneurship journey."
        },
        {
            question: "What is the purpose of the Launchpad Awards?",
            answer: "ADD ANSWER HERE"
        },
        {
            question: "How are winners selected?",
            answer: `ADD ANSWER HERE`
        },
        {
            question: "Do students need to pay to enter?",
            answer: `ADD ANSWER HERE`
        },
        {
            question: "What do winners receive?",
            answer: `ADD ANSWER HERE`
        },
    ]


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

/* =====================================
   FITLIFE FITNESS GYM
   JAVASCRIPT - PART 3
===================================== */

/* FAQ Accordion */
document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;

            const isExpanded =
                question.getAttribute("aria-expanded") === "true";

            question.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            answer.hidden = isExpanded;

        });

    });

});


/* Service Search */
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("serviceSearch");
    const serviceCards = document.querySelectorAll(".service-card");
    const searchMessage = document.getElementById("searchMessage");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue = searchInput.value.toLowerCase();
            let visibleServices = 0;

            serviceCards.forEach(function (card) {

                const serviceName = card.textContent.toLowerCase();

                if (serviceName.includes(searchValue)) {

                    card.style.display = "block";
                    visibleServices++;

                } else {

                    card.style.display = "none";

                }

            });

            if (searchMessage) {

                if (visibleServices === 0) {
                    searchMessage.textContent = "No services found.";
                } else {
                    searchMessage.textContent =
                        visibleServices + " service(s) found.";
                }

            }

        });

    }

});


/* Email validation */
function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* Enquiry Form Validation */
document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();

            const feedback =
                document.getElementById("enquiryFeedback");

            if (!fullName || !email || !phone || !service || !message) {

                feedback.textContent =
                    "Please complete all fields before submitting.";

                feedback.style.color = "red";
                return;

            }

            if (!isValidEmail(email)) {

                feedback.textContent =
                    "Please enter a valid email address.";

                feedback.style.color = "red";
                return;

            }

            feedback.textContent =
                "Your enquiry is ready. Your email application will open.";

            feedback.style.color = "green";

            const subject = encodeURIComponent(
                "FitLife Gym Enquiry - " + service
            );

            const body = encodeURIComponent(
                "Name: " + fullName +
                "\nEmail: " + email +
                "\nPhone: " + phone +
                "\nService: " + service +
                "\nMessage: " + message
            );

            window.location.href =
                "mailto:info@fitlifegym.co.za?subject=" +
                subject + "&body=" + body;

        });

    }

});


/* Contact Form Validation */
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const message =
                document.getElementById("contactMessage").value.trim();

            const feedback =
                document.getElementById("contactFeedback");

            if (!name || !email || !message) {

                feedback.textContent =
                    "Please complete all fields.";

                feedback.style.color = "red";
                return;

            }

            if (!isValidEmail(email)) {

                feedback.textContent =
                    "Please enter a valid email address.";

                feedback.style.color = "red";
                return;

            }

            feedback.textContent =
                "Your message is ready. Your email application will open.";

            feedback.style.color = "green";

            const subject = encodeURIComponent(
                "Message from FitLife Gym Website"
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nMessage: " + message
            );

            window.location.href =
                "mailto:info@fitlifegym.co.za?subject=" +
                subject + "&body=" + body;

        });

    }

});

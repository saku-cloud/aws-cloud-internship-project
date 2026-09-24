// ================================
// AWS CLOUD INTERNSHIP PLATFORM
// ================================

// Update the footer year automatically
const yearElement = document.querySelector(".footer-bottom");

if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} AWS Cloud Internship Project · Built on AWS`;
}


// ================================
// SYSTEM STATUS
// ================================

const statusBadge = document.querySelector(".status-badge");

if (statusBadge) {
    statusBadge.addEventListener("click", function () {
        alert("AWS Internship Platform is currently online.");
    });
}


// ================================
// NAVIGATION
// ================================

const navigationLinks = document.querySelectorAll(".navbar a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


// ================================
// SERVICE CARD INTERACTION
// ================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const serviceName =
            card.querySelector("h3")?.textContent || "AWS Service";

        console.log(`${serviceName} selected`);

    });

});


// ================================
// PAGE LOAD MESSAGE
// ================================

window.addEventListener("load", function () {

    console.log(
        "AWS Cloud Internship Platform loaded successfully."
    );

});
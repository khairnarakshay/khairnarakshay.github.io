document.addEventListener("DOMContentLoaded", function () {
    // Update the current year in the footer
    const currentYearElement = document.getElementById("currentYear");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Automatically close the mobile navbar after clicking a link
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bootstrapCollapse) {
                    bootstrapCollapse.hide();
                } else {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        });
    });

    // Smooth scrolling for internal page links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    /*
     * Update current year in footer
     */
    const currentYearElement =
        document.getElementById("currentYear");

    if (currentYearElement) {
        currentYearElement.textContent =
            new Date().getFullYear();
    }

    /*
     * Mobile navbar close functionality
     */
    const navbarCollapseElement =
        document.getElementById("navbarContent");

    const navbarLinks =
        document.querySelectorAll("#navbarContent .nav-link");

    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarCollapseElement &&
                navbarCollapseElement.classList.contains("show")
            ) {
                const collapseInstance =
                    bootstrap.Collapse.getInstance(
                        navbarCollapseElement
                    );

                if (collapseInstance) {
                    collapseInstance.hide();
                } else {
                    new bootstrap.Collapse(
                        navbarCollapseElement
                    ).hide();
                }
            }
        });
    });

    /*
     * Back to top button
     */
    const backToTopButton =
        document.getElementById("backToTop");

    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /*
     * Smooth scrolling for internal links
     */
    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

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

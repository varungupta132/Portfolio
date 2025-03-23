document.addEventListener("DOMContentLoaded", function () {
    // 🚀 Force the page to always load at the top
    window.scrollTo(0, 0);

    // Smooth scrolling for navigation links (ONLY when clicked)
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
});

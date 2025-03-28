document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button click alert
    document.querySelector(".btn")?.addEventListener("click", function () {
        alert("Explore our services for a better banking experience!");
    });

    // Highlight active section in navbar
    window.addEventListener("scroll", function () {
        let sections = document.querySelectorAll("section");
        let navLinks = document.querySelectorAll("nav ul li a");

        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 100;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav ul li a[href="#${id}"]`)?.classList.add("active");
            }
        });
    });
});

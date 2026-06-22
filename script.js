// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= CLOSE MENU ON CLICK =================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .about-card, .timeline-item, .skill-card, .project-card, .certificate-card, .internship-card, .contact-card"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ================= TYPEWRITER EFFECT =================

const roles = [
    "Python Full Stack Developer",
    "Django Developer",
    "Frontend Developer",
    "Web Designer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-content h2");

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    roleElement.textContent =
        currentRole.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentRole.length) {

        setTimeout(() => {

            charIndex = 0;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }, 1500);

    }

}

setInterval(typeEffect, 120);
// /* ======================================
// PORTFOLIO JAVASCRIPT
// ====================================== */

/* ======================================
LOADER
====================================== */

window.addEventListener("load", () => {
const loader = document.querySelector(".loader");

if (loader) {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
}

});

/* TYPING EFFECT */

const typing = document.getElementById("typing");

const words = [
"Web Developer",
"JavaScript Developer",
"Ract",
"Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

if (!typing) return;

const currentWord = words[wordIndex];

if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

} else {
    typing.textContent = currentWord.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
    }
}

setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();
/* ======================================
SCROLL TO TOP
====================================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

}

/* ======================================
SCROLL REVEAL
====================================== */

const revealElements = document.querySelectorAll(
"#about, #skills, #projects, #contact, .card, .skill-card, .about-box"
);

function reveal() {

revealElements.forEach((item) => {

    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        item.classList.add("fade", "show");
    }
});

}

window.addEventListener("scroll", reveal);
reveal();

/* ======================================
ACTIVE NAVBAR
====================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveNav() {

let current = "";

sections.forEach((section) => {

    if (window.scrollY >= section.offsetTop - 200) {
        current = section.getAttribute("id") || "";
    }
});

navLinks.forEach((link) => {

    link.classList.remove("active");

    if (current && link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
    }
});

}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

/* ======================================
BUTTON RIPPLE
====================================== */

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach((button) => {

button.addEventListener("click", function (event) {

    const rect = button.getBoundingClientRect();

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left = (event.clientX - rect.left) + "px";
    ripple.style.top = (event.clientY - rect.top) + "px";

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

});

/* ======================================
CONSOLE MESSAGE
====================================== */

console.log("Welcome To Paras Portfolio 🚀");

/* ======================================
PROJECT CARD ANIMATION DELAY
====================================== */

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
card.style.animationDelay = (index * 0.2) + "s";
});

/* ======================================
PROFILE IMAGE HOVER
====================================== */

const profile = document.querySelector(".right img");

if (profile) {

profile.addEventListener("mouseenter", () => {
    profile.style.transform = "rotate(5deg) scale(1.05)";
});

profile.addEventListener("mouseleave", () => {
    profile.style.transform = "";
});

}

/* ======================================
THEME TOGGLE
====================================== */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeBtn.innerHTML = isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});

}

/* ======================================
COUNTER ANIMATION
====================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

const target = Number(counter.getAttribute("data-target"));

if (!Number.isFinite(target) || target < 0) return;

counter.innerText = "0";

const duration = 1500;
const startTime = performance.now();

function updateCounter(currentTime) {

    const progress = Math.min((currentTime - startTime) / duration, 1);

    counter.innerText = Math.ceil(target * progress);

    if (progress < 1) {
        requestAnimationFrame(updateCounter);
    } else {
        counter.innerText = target;
    }
}

requestAnimationFrame(updateCounter);

});

/* ======================================
CUSTOM CURSOR
====================================== */

const cursor = document.getElementById("cursor");

if (cursor) {

document.addEventListener("mousemove", (event) => {
    cursor.style.left = (event.clientX - cursor.offsetWidth / 2) + "px";
    cursor.style.top = (event.clientY - cursor.offsetHeight / 2) + "px";
});

}

/* ======================================
PROJECT CARD HOVER
====================================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-15px) rotateX(5deg)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "";
});

});

/* ======================================
CONTACT FORM
====================================== */

function form() {

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

if (!nameInput || !emailInput) {
    console.error("Contact form मधील name email input ");
    return false;
}

const name = nameInput.value.trim();
const email = emailInput.value.trim();

if (!name || !email) {
    alert("Please enter your name and email.");
    return false;
}

console.log("Name:", name);
console.log("Email:", email);

alert("Your details have been captured successfully!");

return false;

}
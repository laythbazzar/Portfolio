const root = document.documentElement;
const modeBtn = document.getElementById("mode-icon");
const contactForm = document.querySelector('.contact-form');

let savedTheme = localStorage.getItem("data-theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    modeBtn.src = savedTheme === "dark" ? "assests/Icons/sun.svg" : "assests/Icons/moon.svg";
} else {
    root.setAttribute("data-theme", "light");
}

function changeMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme);

    modeBtn.src = newTheme === "dark" ? "assests/Icons/sun.svg" : "assests/Icons/moon.svg";
}

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }, {
        root: null,
        threshold: 0.2,
        rootMargin: "-70px 0px 0px 0px"
    });

    faders.forEach(fader => observer.observe(fader));
});

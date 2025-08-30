const root = document.documentElement;
const modeBtn = document.getElementById("mode-icon");

let savedTheme = localStorage.getItem("data-theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    modeBtn.src = savedTheme == "dark" ? "assests/Icons/sun.svg" : "assests/Icons/moon.svg";
} else {
    root.setAttribute("data-theme","light");
}

function changeMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme == "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme)

    modeBtn.src = newTheme == "dark" ? "assests/Icons/sun.svg" : "assests/Icons/moon.svg";
}

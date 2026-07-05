const checkbox = document.getElementById("checkbox");
const checkboxOffcanvas = document.getElementById("checkbox_2");
const navBar = document.querySelector(".main-navbar");
const mainHero = document.querySelector(".main-hero-section");
const mainHeroHeading = document.querySelector(".hero-heading");
const themeButton = document.querySelector(".button");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    navBar.classList.toggle("dark-mode-navbar");
    mainHero.classList.toggle("dark-mode-hero");
    mainHeroHeading.classList.toggle("hero-heading-dark");
    themeButton.classList.toggle("dark-mode-theme-button");
});

checkboxOffcanvas.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    navBar.classList.toggle("dark-mode-navbar");
    mainHero.classList.toggle("dark-mode-hero");
    mainHeroHeading.classList.toggle("hero-heading-dark");
    themeButton.classList.toggle("dark-mode-theme-button");
});
const menuWrapper = document.querySelector(".nav__list");
const menuButton = document.querySelector(".nav__menu-btn");

let isMenuOpened = false;

const showMenu = () => {
    window.scrollTo({ top: 0 });
    isMenuOpened = true;
    menuWrapper.style.display = "block";
    menuButton.setAttribute("aria-expanded", "true");
    document.querySelector("body").style.overflow = "hidden";
};

const hideMenu = () => {
    isMenuOpened = false;
    menuWrapper.style.display = null;
    menuButton.setAttribute("aria-expanded", "false");
    document.querySelector("body").style.overflow = null;
};

menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    isMenuOpened ? hideMenu() : showMenu();
});

menuWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", () => {
    if (isMenuOpened) hideMenu();
});

window.addEventListener("resize", () => {
    if (isMenuOpened && window.matchMedia("(min-width: 768px)")) hideMenu();
});

window.addEventListener("keydown", (event) => {
    if (isMenuOpened && event.key == "Escape") hideMenu();
});

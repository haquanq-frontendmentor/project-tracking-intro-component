const mobileMenu = {
  menuElement: document.querySelector(".nav__link__list"),
  menuButton: document.querySelector(".nav__menu__btn"),
  isOpening: false,
  showMenu() {
    window.scrollTo({ top: 0 });
    this.isOpening = true;
    this.menuElement.style.display = "block";
    this.menuButton.classList.add("pressed");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelectorAll(".intro__wrapper a, button").forEach((el) => (el.tabIndex = "-1"));
  },
  hideMEnu() {
    this.isOpening = false;
    this.menuElement.style.display = null;
    this.menuButton.classList.remove("pressed");
    document.querySelector("body").style.overflow = null;
    document.querySelectorAll(".intro__wrapper a, button").forEach((el) => (el.tabIndex = "0"));
  },
  init() {
    this.menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.isOpening) this.hideMEnu();
      else this.showMenu();
    });

    this.menuElement.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    window.addEventListener("click", () => {
      if (this.isOpening) this.hideMEnu();
    });

    window.addEventListener("resize", (e) => {
      if (this.isOpening && window.matchMedia("(min-width: 768px)")) this.hideMEnu();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape" && this.isOpening) this.hideMEnu();
    });
  },
};

mobileMenu.init();

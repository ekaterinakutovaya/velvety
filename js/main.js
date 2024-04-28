import "remixicon/fonts/remixicon.css";
import { animateHeroSlide, introAnimation } from "./animations.js";
import { initSlider } from "./slider.js";
import gsap from "gsap";

// introAnimation();

const heroSlider = initSlider(".hero-slider", {
  slidesPerView: 1,
});

const heroPrevButton = document.querySelector(".hero__prev-btn");
const heroNextButton = document.querySelector(".hero__next-btn");

heroSlider.on("slideChange", () => {
  const activeIndex = heroSlider.activeIndex;

  const activeSlide = document.querySelector(
    `.hero-slider .swiper-slide:nth-child(${activeIndex + 1})`,
  );

  const titleFirstLine = activeSlide.querySelector(".first-title-line span");
  const titleSecondLine = activeSlide.querySelector(".second-title-line span");
  const titleThirdLine = activeSlide.querySelector(".third-title-line span");
  const heroButton = activeSlide.querySelector(".hero__btn");

  animateHeroSlide(
    titleFirstLine,
    titleSecondLine,
    titleThirdLine,
    heroButton,
    heroPrevButton,
    heroNextButton,
    heroSlider,
  );
});

//********** Mobile Menu ************************
const header = document.querySelector("#header");
const navTriggerBtn = document.querySelector("#nav-trigger-btn");
const navTriggerIcon = navTriggerBtn.querySelector("i");
const navMenu = document.querySelector("#nav-menu");

navTriggerBtn.addEventListener("click", function () {
  header.classList.toggle("header-light");
  navMenu.classList.toggle("nav-is-open");

  if (navTriggerIcon.classList.contains("ri-menu-line")) {
    navTriggerIcon.classList.remove("ri-menu-line");
    navTriggerIcon.classList.add("ri-close-large-line");
  } else {
    navTriggerIcon.classList.remove("ri-close-large-line");
    navTriggerIcon.classList.add("ri-menu-line");
  }
});

// ************ Menu dropdown *****************************
const dropdownTriggerBtn = document.querySelector("#dropdown-menu");

export function toggleDropdownMenu() {
  const dropdownList = document.querySelector("#dropdown-menu-list");
  const chevronIcon = document.querySelector("#dropdown-menu .chevron-down i");

  if (dropdownList.classList.contains("open")) {
    dropdownList.classList.remove("open");
    chevronIcon.classList.remove("ri-arrow-up-s-line");
    chevronIcon.classList.add("ri-arrow-down-s-line");
  } else {
    dropdownList.classList.add("open");
    chevronIcon.classList.remove("ri-arrow-down-s-line");
    chevronIcon.classList.add("ri-arrow-up-s-line");
  }
}

dropdownTriggerBtn.addEventListener("click", function () {
  toggleDropdownMenu();
});

import "remixicon/fonts/remixicon.css";
import { animateHeroSlide, introAnimation } from "./animations.js";
import { initSlider } from "./slider.js";

introAnimation();

const heroSlider = initSlider(".hero-slider", {
  slidesPerView: 1,
});

heroSlider.on("slideChange", () => {
  const activeIndex = heroSlider.activeIndex;

  const activeSlide = document.querySelector(
    `.hero-slider .swiper-slide:nth-child(${activeIndex + 1})`,
  );

  const titleFirstLine = activeSlide.querySelector(".first-title-line span");
  const titleSecondLine = activeSlide.querySelector(".second-title-line span");
  const titleThirdLine = activeSlide.querySelector(".third-title-line span");
  const heroButton = activeSlide.querySelector(".hero__btn");

  animateHeroSlide(titleFirstLine, titleSecondLine, titleThirdLine, heroButton);
});

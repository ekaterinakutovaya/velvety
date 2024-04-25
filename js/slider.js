import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

export function initSlider(selector, options) {
  const swiper = new Swiper(selector, {
    modules: [Navigation, Pagination, EffectFade],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    ...options,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".hero__next-btn",
      prevEl: ".hero__prev-btn",
    },
    pagination: {
      el: ".hero__dots",
      clickable: true,
      renderBullet: function (index, className) {
        console.log("Rendering bullet for index:", index);
        return '<span class="' + className + ' hero__dot"></span>';
      },
      bulletClass: "hero__dot",
      bulletActiveClass: "hero__dot-active",
    },
    on: {
      init: function () {
        console.log("swiper initialized");

        document
          .querySelector(".hero__prev-btn")
          .addEventListener("click", function () {
            console.log("Previous button clicked");
            swiper.slidePrev();
          });

        document
          .querySelector(".hero__next-btn")
          .addEventListener("click", function () {
            console.log("Next button clicked");
            swiper.slideNext();
          });
      },
    },
  });

  swiper.init();
  return swiper;
}

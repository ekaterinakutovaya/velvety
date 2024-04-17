import "remixicon/fonts/remixicon.css";
import { floatAnimation, introAnimation } from "./animations.js";

introAnimation();

const slides = document.querySelectorAll(".slide");
console.log(slides.length);
let currentSlide = 0;
const maxSlides = slides.length;
const paginationContainer = document.querySelector(".slider__dots");
const sliderWrapper = document.querySelector(".slider-wrapper");
let touchStartX = 0;
let touchEndX = 0;

function moveToSlide(slide) {
  slides[currentSlide].classList.remove("active");
  slides[slide].classList.add("active");
  currentSlide = slide;
  updatePagination();
  introAnimation();
}

function createPagination() {
  for (let i = 0; i < maxSlides; i++) {
    let dot = document.createElement("span");
    dot.classList.add("slider__dot");
    dot.addEventListener("click", () => {
      moveToSlide(i);
    });
    paginationContainer.appendChild(dot);
  }
  updatePagination();
}

function updatePagination() {
  const dots = paginationContainer.children;
  Array.from(dots).forEach((dot, index) => {
    index === currentSlide
      ? dot.classList.add("active")
      : dot.classList.remove("active");
  });
}

document.querySelector(".prev").addEventListener("click", function () {
  let newSlide = currentSlide - 1 < 0 ? maxSlides - 1 : currentSlide - 1;
  moveToSlide(newSlide);
});
document.querySelector(".next").addEventListener("click", function () {
  let newSlide = currentSlide + 1 >= maxSlides ? 0 : currentSlide + 1;
  moveToSlide(newSlide);
});

// Touch events
sliderWrapper.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

sliderWrapper.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

// Handle swipe gestures
function handleSwipeGesture() {
  if (touchEndX < touchStartX) {
    // Left swipe
    moveToSlide((currentSlide + 1) % maxSlides);
  }
  if (touchEndX > touchStartX) {
    // Right swipe
    moveToSlide((currentSlide - 1 + maxSlides) % maxSlides);
  }
}

slides[currentSlide].classList.add("active");
createPagination();

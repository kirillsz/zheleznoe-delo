import Glide from "@glidejs/glide";
import "./repailSliderHandler";
window.addEventListener("DOMContentLoaded", function () {
  new Glide("#docs-slider", {
    type: "carousel",
    startAt: 0,
    animationDuration: 300,
    perView: 3,
    breakpoints: {
      1024: {
        perView: 2,
        gap: 16,
      },
      600: {
        perView: 1,
        gap: 16,
      },
    },
  }).mount();

  new Glide("#repair-slider", {
    type: "carousel",
    animationDuration: 300,
    startAt: 0,
    perView: 4,
    breakpoints: {
      1024: {
        perView: 2,
        gap: 16,
      },
      600: {
        perView: 1,
        gap: 16,
      },
    },
  }).mount();

  new Glide("#agregators-slider", {
    type: "carousel",
    animationDuration: 300,
    startAt: 0,
    perView: 1,
  }).mount();
});

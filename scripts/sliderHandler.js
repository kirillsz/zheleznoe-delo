import Glide from "@glidejs/glide";
export function initSlider() {
  new Glide("#docs-slider", {
    type: "carousel",
    startAt: 0,
    animationDuration: 300,
    perView: 3,
    breakpoints: {
      800: {
        type: "slider",
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
      800: {
        type: "slider",
        perView: 2,
        peek: { before: 0, after: 45 },
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
    breakpoints: {
      800: {
        type: "slider",
        perView: 2,
        peek: { before: 0, after: 45 },
        gap: 16,
      },
      600: {
        perView: 1,
        gap: 16,
      },
    },
  }).mount();
}

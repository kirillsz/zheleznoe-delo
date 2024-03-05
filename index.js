import "./scripts/geotagBannerHandler";
import "./scripts/popUpHandler";
import { initSlider } from "./scripts/sliderHandler";
import "./scripts/quizHandler";
// Variables
//

const scrollToNavAnchors = document.querySelectorAll(".smooth-scroll-anchor");

//
// Methods
//
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

//
// Inits & Event Listeners
//

scrollToNavAnchors.forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll);
});
let popUpWrapper = document.getElementById("members-modal");
document
  .getElementById("members-modal-toggle")
  .addEventListener("click", () => (popUpWrapper.style.display = "block"));
document
  .getElementById("modal-close")
  .addEventListener("click", () => (popUpWrapper.style.display = "none"));
initSlider();

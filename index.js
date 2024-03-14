import "./scripts/geotagBannerHandler";
import "./scripts/popUpHandler";
import { initSlider } from "./scripts/sliderHandler";
import "./scripts/quizHandler";
import "./scripts/telephoneInputHandler";
// Variables
let popUpWrapper = document.getElementById("members-modal");

//

//
// Methods
//

//
// Inits & Event Listeners
//

document
  .getElementById("members-modal-toggle")
  .addEventListener("click", () => (popUpWrapper.style.display = "block"));
document
  .getElementById("modal-close")
  .addEventListener("click", () => (popUpWrapper.style.display = "none"));
initSlider();

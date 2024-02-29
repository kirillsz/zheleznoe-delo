import "./scripts/geotagBannerHandler";
import "./scripts/popUpHandler";
//
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

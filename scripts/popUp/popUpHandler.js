import { checkForParent } from "../utils";
window.addEventListener("DOMContentLoaded", function () {
  let membersPopUpWrapper = document.getElementById("members-modal");
  const popUpWrapper = document.querySelector(".pop-up-wrapper");
  const inputActionType = popUpWrapper.querySelector("#input_action-type");
  const inputPhoneNumber = popUpWrapper.querySelector("input[type='tel']");

  const popUpShowElementsArray = document.querySelectorAll(".show-popUp");
  const popUpHideElementsArray = document.querySelectorAll(".hide-popUp");
  const catalogItems = document.querySelectorAll(".catalog-item");

  const actionArray = ["Купить", "Обмен", "Ремонт"];

  function setFormAction(e) {
    let action = e.dataset.action;
    inputActionType.setAttribute(
      "value",
      actionArray.includes(action)
        ? `${action} ${checkForParent(e, catalogItems).dataset.item}`
        : action
    );
  }

  const popUpShow = (e) => {
    popUpWrapper.style.display = "block";
    inputPhoneNumber.focus();
    setFormAction(e);
  };
  const popUpHide = () => {
    popUpWrapper.style.display = "none";
  };

  popUpShowElementsArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      popUpShow(event.target);
    });
  });
  popUpHideElementsArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      popUpHide();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popUpHide();
    }
  });

  // Members modal

  document
    .getElementById("members-modal-toggle")
    .addEventListener("click", () => {
      membersPopUpWrapper.style.display = "block";
    });
  document
    .getElementById("modal-close")
    .addEventListener(
      "click",
      () => (membersPopUpWrapper.style.display = "none")
    );
});

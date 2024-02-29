const popUpWrapper = document.querySelector(".pop-up-wrapper");
const inputActionType = popUpWrapper.querySelector("#input_action-type");
const popUpShowElementsArray = document.querySelectorAll(".show-popUp");
const popUpHideElementsArray = document.querySelectorAll(".hide-popUp");
const catalogItems = document.querySelectorAll(".catalog-item");

const actionArray = ["Купить", "Обмен", "Ремонт"];

function checkForParent(child) {
  const arr = [...catalogItems];
  return arr.find((el) => el.contains(child));
}

function setFormAction(e) {
  let action = e.dataset.action;
  inputActionType.setAttribute(
    "value",
    actionArray.includes(action)
      ? `${action} ${checkForParent(e).dataset.item}`
      : action
  );
}

const popUpShow = (e) => {
  popUpWrapper.style.display = "block";
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

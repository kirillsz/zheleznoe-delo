import { checkForParent } from "./utils";
const currentStepElementsArray = document.querySelectorAll(
  ".quiz-section .current-step"
);
// Send form
const sendFormInputTractor = document.querySelector(
  ".quiz-section #input_tractor-type"
);
const sendFormInputService = document.querySelector(
  ".quiz-section #input_service-type"
);
const sendFormInputDate = document.querySelector(".quiz-section #input_date");
//
const tractorTypeInput = document.querySelector(
  ".quiz-section #tractor-user-choice__input"
);
var progressBar = document.querySelector(
  ".quiz-section__interactive_progress-bar--completed"
);
var currentStepCounter = document.getElementById("current-step-count");
var currentStepIndex = 1;

const toggleContent = (currentStepInd, forwardStepIndex) => {
  document.querySelector(
    `.quiz-section .current-step[data-step-content='${currentStepInd}']`
  ).style.display = "none";
  document.querySelector(
    `.quiz-section .current-step[data-step-content='${forwardStepIndex}']`
  ).style.display = "flex";
};

const toggleButtonState = (input, state) => {
  checkForParent(input, currentStepElementsArray).querySelector(
    '[data-direction="next"]'
  ).disabled = state;
};

const showStepHandler = (e) => {
  let direction = e.dataset.direction;

  if (direction == "next") {
    toggleContent(currentStepIndex, currentStepIndex + 1);
    currentStepIndex += 1;
  }
  if (direction == "prev") {
    toggleContent(currentStepIndex, currentStepIndex - 1);
    currentStepIndex -= 1;
  }
  currentStepCounter.textContent = `${currentStepIndex}`;
  progressBar.style.width = `${25 * currentStepIndex}%`;
};
const onCheckHandler = (input) => {
  if (input.type == "radio") {
    if (input.checked && input.id !== "tractor-user-choice") {
      toggleButtonState(input, false);
      tractorTypeInput.value = "";
      tractorTypeInput.disabled = true;
    }
  }
};

document
  .querySelectorAll(".quiz-section .current-step__controlls")
  .forEach((button) =>
    button.addEventListener("click", (event) => showStepHandler(event.target))
  );

document
  .querySelectorAll(".quiz-section .quiz-section__radio-group input")
  .forEach((input) =>
    input.addEventListener("change", (e) => onCheckHandler(e.target))
  );
document
  .querySelector(".quiz-section #tractor-user-choice")
  .addEventListener("change", (e) => {
    tractorTypeInput.disabled = false;
    toggleButtonState(
      document.querySelector(".quiz-section #tractor-user-choice"),
      true
    );
  });

// Send form input

document
  .querySelectorAll(
    '.quiz-section .quiz-section__radio-group input[name="tractor-type"]'
  )
  .forEach((input) =>
    input.addEventListener("change", (e) => {
      if (e.target.id === "tractor-user-choice") {
        tractorTypeInput.addEventListener("keyup", (e) => {
          if (e.target.value.length < 1) {
            toggleButtonState(
              document.querySelector(".quiz-section #tractor-user-choice"),
              true
            );
          }
          if (e.target.value.length >= 1) {
            toggleButtonState(
              document.querySelector(".quiz-section #tractor-user-choice"),
              false
            );
          }
          sendFormInputTractor.value = e.target.value;
        });
      } else {
        sendFormInputTractor.value = e.target.value;
      }
    })
  );

document
  .querySelectorAll(
    '.quiz-section .quiz-section__radio-group input[name="service-type"]'
  )
  .forEach((input) =>
    input.addEventListener("change", (e) => {
      sendFormInputService.value = e.target.value;
    })
  );

document
  .querySelectorAll(
    '.quiz-section .quiz-section__radio-group input[name="date"]'
  )
  .forEach((input) =>
    input.addEventListener("change", (e) => {
      sendFormInputDate.value = e.target.value;
    })
  );

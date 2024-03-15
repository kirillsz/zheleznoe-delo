window.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;
  function formMessageHandle(isSend) {
    let animationDuration = 700;
    const messageContainer = document.getElementById("send-form__response");
    const toggleMessageContainer = (display, opacity) => {
      if (display === "block") {
        messageContainer.style.display = display;
        messageContainer.style.opacity = opacity;
      } else {
        messageContainer.style.opacity = opacity;
        setTimeout(
          () => (messageContainer.style.display = display),
          animationDuration
        );
      }
    };
    if (isSend) {
      messageContainer.innerHTML =
        "Мы <span style='color: green'>приняли</span> вашу заявку. <br />Наш оператор скоро всяжется с вами!";
    } else {
      messageContainer.innerHTML =
        "<span style='color: red'>Не удалось</span> отправить вашу заявку. <br /> Пожалуйста, попробуйте еще раз!";
    }

    toggleMessageContainer("block", 1);
    setTimeout(() => toggleMessageContainer("none", 0), 5000);
  }
  if (currentUrl.indexOf("&sendform=success") !== -1) {
    formMessageHandle(true);
  }
  if (currentUrl.indexOf("&sendform=error") !== -1) {
    formMessageHandle(false);
  }
});

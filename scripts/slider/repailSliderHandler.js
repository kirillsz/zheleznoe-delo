window.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(
    "#repair-slider .slider-section_about-header"
  );
  const controllBack = document.querySelector(
    "#repair-slider [data-glide-dir='|<']"
  );
  const controllNext = document.querySelector(
    "#repair-slider [data-glide-dir='|>']"
  );
  const repairSliderTextArray = [
    "Специалисты стажировались на Петербургском тракторном заводе им. Кирова и имеют стаж ремонта десятки лет!",
    "Капитальный ремонт по заводским ремонтным технологическим картам.",
    "Закупаем заводские комплектующие у дилеров по договору.",
    "Имеем мелкосерийное контрактное производство РТИ, уплотнений и прокладок с высочайшим качеством и износостойкостью.",
    "От мойки КПП до испытаний и обкатки используется много оборудования и стендов.",
    "Каждая КПП отмывается, перебирается до болтика, собирается на новых комплектующих и обкатывается на стенде.",
    "Предоставляем фото и видео сборки и обкатки именно той КПП, которую везём в обмен. До оплаты!",
  ];
  let counter = 0;
  const handleCounter = (element) => {
    if (element === controllNext) {
      counter += 1;
    }
    if (element === controllBack) {
      counter -= 1;
    }

    header.textContent = repairSliderTextArray[counter];
  };
  controllNext.addEventListener("click", () => {
    handleCounter(controllNext);
  });
  controllBack.addEventListener("click", () => {
    handleCounter(controllBack);
  });
});

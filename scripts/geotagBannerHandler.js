if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const locationDataBanner = document.querySelector(
        ".entry-section--main__description-location-data"
      );
      const { longitude, latitude } = position.coords;
      fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=a61f8c40-3a76-4699-a090-02b5989fcecb&format=json&geocode=${longitude},${latitude}
    `)
        .then((response) => response.json())
        .then((result) => {
          let regionName;
          const geodataArray =
            result.response.GeoObjectCollection.featureMember;
          geodataArray.map((elem) => {
            if (elem.GeoObject.name.indexOf("область") !== -1) {
              locationDataBanner.innerHTML = `Работаем в вашем регионе - ${elem.GeoObject.name}`;
            }
          });
        });
    },
    function (error) {
      console.log("Ошибка определения местоположения: " + error.message);
    }
  );
} else {
  console.log("Geolocation не поддерживается вашим браузером.");
}

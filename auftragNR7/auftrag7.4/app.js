const form = document.querySelector("form");
let plz;
let weatherData;
const weatherContainer = document.querySelector(".weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  plz = form.weatherInput.value;
  getWeatherData(plz).then((data) => {
    weatherData = data;
    displayWeater(weatherData);
  });
});

function getWeatherData(city) {
  return fetch(
    `https://corsproxy.io/?url=https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${city}00`
  ).then((res) => res.json());
}

function displayWeater(data) {
  weatherContainer.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = data.currentWeather.temperature;

  const date = document.createElement("h2");
  date.textContent = data.forecast[0].dayDate;

  weatherContainer.append(title, date);
}

/// date
function formatDate(date) {
  let numberDate = date.getUTCDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  return `${currentDay}, ${numberDate}, ${hours}:${minutes}`;
}
let now = new Date();
let currentDate = document.querySelector("#date");
currentDate.innerHTML = formatDate(now);

function displayWeather(response) {
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weatherDescription");
  let temperatureElement = document.querySelector("#current-temperature");
  let iconElement = document.querySelector("#icon");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let currentIcon = response.data.weather[0].icon;
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${currentIcon}@2x.png`
  );

  icon.setAttribute("alt", currentIcon);
}

function searchCity(city) {
  let apiKey = `763b250b80fa958302cdd5a87d7a2da5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityImputElement = document.querySelector("#city-input");
  searchCity(cityImputElement.value);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", handleSubmit);

let celsiusTemp = null;

function displayFarenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (temperatureElement.innerHTML * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusLink = document.querySelector("#celsius-conversionLink");
celsiusLink.addEventListener("click", displayCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit-conversionLink");
fahrenheitLink.addEventListener("click", displayFarenheitTemp);

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
  temperatureElement.innerHTML = Math.round(response.data.weather.main.temp);
  iconElement.setAttribute =
    ("src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  humidityElement.innerHTML = response.data.main.humdity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let city = "London";
let apiKey = `763b250b80fa958302cdd5a87d7a2da5`;
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiKey).then(displayWeather);

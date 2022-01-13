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

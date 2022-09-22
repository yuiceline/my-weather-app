// function convertToC(event) {
//   event.preventDefault();

//   let currentTemp = document.querySelector("h2");
//   currentTemp.innerHTML = 30;
// }

// let celcius = document.querySelector("#celcius");
// celcius.addEventListener("click", convertToC);

// function convertToF(event) {
//   event.preventDefault();

//   let currentTemp = document.querySelector("h2");
//   let tempElement = currentTemp.innerHTML;
//   tempElement = Number(tempElement);
//   currentTemp.innerHTML = Math.round(tempElement * 9) / 5 + 32;
// }

// let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit.addEventListener("click", convertToF);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
currentDay = days[now.getDay()];
currentDate = now.getDate();
currentMonth = months[now.getMonth()];
currentHour = now.getHours();
currentMinutes = String(now.getMinutes()).padStart(2, "0");

h2 = document.querySelector("h2");
h2.innerHTML = `${currentDay}, ${currentDate} ${currentMonth}, ${currentHour}:${currentMinutes}`;

function showTemperature(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${currentTemp} °C`;
  let weatherDescription = response.data.weather[0].description;
  let h4 = document.querySelector("#weather-description");
  h4.innerHTML = weatherDescription;
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#user-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;

  let units = "metric";
  let apiKey = "690c1586235f5c036bd74a5466b0f1f4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showTemperature);
}

let checkCity = document.querySelector("#check-form");
checkCity.addEventListener("submit", changeCity);






function showCurrentTemperature(response) {
  let currentLocation = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = currentLocation;
  let currentTemp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${currentTemp} °C`;
  let weatherDescription = response.data.weather[0].description;
  let h4 = document.querySelector("#weather-description");
  h4.innerHTML = weatherDescription;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "690c1586235f5c036bd74a5466b0f1f4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showCurrentTemperature);
}

function getCurrentInfo() {
  navigator.geolocation.getCurrentPosition(showPosition);
  console.log(showPosition);
}

let locationButton = document.querySelector("button");
locationButton.addEventListener("click", getCurrentInfo);

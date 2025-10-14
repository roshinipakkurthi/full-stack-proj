const apiKey = "88e704608d6eec9af8bccf06d8b17d22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}kmph`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "clear.png";
      break;
    case "Rain":
      weatherIcon.src = "rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "mist.png";
      break;
    default:
      weatherIcon.src = "default.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

















































// const apiKey = "88e704608d6eec9af8bccf06d8b17d22";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon"); // Selector for the weather icon

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + "&appid=" + apiKey);

//   if (response.status == 404) {
//     console.error("Error fetching weather data:", error);
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     var data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = data.main.temp + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

//     if (data.weather[0].main == "Clouds") {
//         weatherIcon.src = "clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//         weatherIcon.src = "clear.png";
//     } else if (data.weather[0].main == "Rain") {
//         weatherIcon.src = "rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//         weatherIcon.src = "drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//         weatherIcon.src = "mist.png";
//     }

//   document.querySelector(".weather").style.display = "block";
//     }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });


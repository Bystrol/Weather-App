const input = document.querySelector("input");
const btn = document.querySelector("button");
const errorText = document.querySelector(".error-text");
const cityName = document.querySelector(".city-name");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const img = document.querySelector("img");
const pressure = document.querySelector(".pressure");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels_like");
const weatherInfo = document.querySelector(".weather");
const parameters2_1 = document.querySelector(".parameters2 p:nth-child(1)");
const parameters2_2 = document.querySelector(".parameters2 p:nth-child(2)");
const parameters2_3 = document.querySelector(".parameters2 p:nth-child(3)");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=638c587993b9533b6d691b999b840c52";
const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value;
  const API_URL = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(API_URL)
    .then((res) => {
      console.log(res.data);
      const weatherID = res.data.weather[0].id;

      parameters2_1.textContent = "Feels like:";
      parameters2_2.textContent = "Pressure:";
      parameters2_3.textContent = "Humidity:";
      cityName.textContent = res.data.name;
      pressure.textContent = res.data.main.pressure + " hPa";
      humidity.textContent = res.data.main.humidity + " %";
      temperature.textContent = Math.floor(res.data.main.temp) + " °C";
      feelsLike.textContent = Math.floor(res.data.main.feels_like) + " °C";
      input.value = "";
      errorText.textContent = "";

      if (weatherID >= 200 && weatherID < 300) {
        img.setAttribute("src", "/img/thunderstorm.jpg");
        weatherInfo.textContent = "Thunderstorm";
      } else if (weatherID >= 300 && weatherID < 500) {
        img.setAttribute("src", "/img/drizzle.png");
        weatherInfo.textContent = "Drizzle";
      } else if (weatherID >= 500 && weatherID < 600) {
        img.setAttribute("src", "/img/rain.png");
        weatherInfo.textContent = "Rainy";
      } else if (weatherID >= 600 && weatherID < 700) {
        img.setAttribute("src", "/img/snow.jpg");
        weatherInfo.textContent = "Snowfall";
      } else if (weatherID >= 700 && weatherID < 800) {
        img.setAttribute("src", "/img/atmosphere.png");
        weatherInfo.textContent = "Foggy";
      } else if (weatherID == 800) {
        img.setAttribute("src", "/img/clear.png");
        weatherInfo.textContent = "Sunny";
      } else if (weatherID > 800) {
        img.setAttribute("src", "/img/clouds.png");
        weatherInfo.textContent = "Cloudy";
      }
    })
    .catch(() => (errorText.textContent = "Enter correct name!"));
};

const enterCheck = (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
};

const cityClick = (e) => {
  input.value = e.target.textContent;
  getWeather();
};

btn.addEventListener("click", getWeather);
input.addEventListener("keyup", enterCheck);
list1.addEventListener("click", cityClick);
list2.addEventListener("click", cityClick);

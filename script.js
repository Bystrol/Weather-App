const input = document.querySelector('input');
const btn = document.querySelector('button');
const errorText = document.querySelector('.error-text');
const cityName = document.querySelector('.city-name');
const list1 = document.querySelector('ul:nth-of-type(1)');
const list2 = document.querySelector('ul:nth-of-type(2)');
const img = document.querySelector('img');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feels_like');
const weatherInfo = document.querySelector('.weather');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=638c587993b9533b6d691b999b840c52';
const API_UNITS = '&units=metric';

const getWeather = () => {
    const city = input.value;
    const API_URL = API_LINK + city + API_KEY + API_UNITS;

    axios.get(API_URL).then(res => {
        console.log(res.data);
        const weatherID = res.data.weather[0].id;

        cityName.textContent = res.data.name;
        pressure.textContent = res.data.main.pressure + ' hPa';
        humidity.textContent = res.data.main.humidity + ' %';
        temperature.textContent = Math.floor(res.data.main.temp) + ' °C';
        feelsLike.textContent = Math.floor(res.data.main.feels_like) + ' °C';
        input.value = '';
        
        if(weatherID >= 200 && weatherID < 300){
            img.setAttribute('src', '/img/thunderstorm.png');
            weatherInfo.textContent = 'Burza z piorunami';
        } else if(weatherID >= 300 && weatherID < 500){
            img.setAttribute('src', '/img/drizzle.png');
            weatherInfo.textContent = 'Mżawka';
        } else if(weatherID >= 500 && weatherID < 600){
            img.setAttribute('src', '/img/rain.png');
            weatherInfo.textContent = 'Deszczowo';
        } else if(weatherID >= 600 && weatherID < 700){
            img.setAttribute('src', '/img/snow.png');
            weatherInfo.textContent = 'Opady śniegu';
        } else if(weatherID >= 700 && weatherID < 800){
            img.setAttribute('src', '/img/atmosphere.png');
            weatherInfo.textContent = 'Mgliście';
        } else if(weatherID == 800){
            img.setAttribute('src', '/img/clear.png');
            weatherInfo.textContent = 'Słonecznie';
        } else if(weatherID > 800){
            img.setAttribute('src', '/img/clouds.png');
            weatherInfo.textContent = 'Zachmurzenie';
        }
    }).catch(() => errorText.textContent = 'Wpisz poprawną nazwę!')
}

const enterCheck = (e) =>{
    if(e.key === 'Enter'){
        getWeather();
    }
}

btn.addEventListener('click', getWeather);
input.addEventListener('keyup', enterCheck);
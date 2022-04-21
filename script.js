const input = document.querySelector('input');
const btn = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const list1 = document.querySelector('ul:nth-of-type(1)');
const list2 = document.querySelector('ul:nth-of-type(2)');
const img = document.querySelector('img');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=638c587993b9533b6d691b999b840c52';
const API_UNITS = '&units=metric';

const getWeather = () => {
    const city = input.value;
    const API_URL = API_LINK + city + API_KEY + API_UNITS;

    axios.get(API_URL).then(res => {
        
    })
}
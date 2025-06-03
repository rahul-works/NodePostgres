import { getWeather } from './api.js';
import { updateWeatherDisplay } from './dom.js';

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return alert("Please enter a city");

    try {
        const weatherData = await getWeather(city);
        updateWeatherDisplay(weatherData);
    } catch (error) {
        alert(error.message);
    }
});
const API_KEY = "cb0b0724cfb361bbf33293f89ddcaf83"; // Replace with OpenWeatherMap API key

export const getWeather = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return {
        name: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon
    };
};

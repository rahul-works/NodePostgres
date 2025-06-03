export const updateWeatherDisplay = ({ name, temp, description, icon }) => {
    const display = document.getElementById("weatherDisplay");
    display.innerHTML = `
    <h2>${name}</h2>
    <p>${temp}°C - ${description}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
  `;
};

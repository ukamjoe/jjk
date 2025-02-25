const apiKey = '9b54fede9fc6172dcf20748af5a7f32d';

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherInfo.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${description}</p>
    `;
}

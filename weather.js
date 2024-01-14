// weather.js


const apiKey = '48c0e48ed12dd6d94e0297da105186f5';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data and update the webpage
async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            // Update the webpage with weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherElement = document.getElementById('weather');
            weatherElement.innerHTML = `Weather: ${description}, Temperature: ${temperature}°C`;
        } else {
            console.error('Error fetching weather data:', data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Automatically fetch weather data when the page loads
window.addEventListener('load', () => {
    getWeather('New York'); 
});

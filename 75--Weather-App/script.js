// WEATHER APP


// Variables for DOM elements and API key.
const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = "APIKEY";

// Event listener for form submission. 
// Calls getWeatherData function and displays the weather information.
weatherForm.addEventListener("submit", async event => {
    // Prevents the default form submission. 
    event.preventDefault();

    // Get the city name from the input field.
    const city = cityInput.value;

    // If city is not empty, call getWeatherData function.
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.log(error);
            displayError(error)
        }
    }
    else {
        displayError('Please enter a valid city');
    }
})

// Function to fetch weather data from the API.
async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('City not found');
    }

    return await response.json();
}
// Function to display the weather information on the card.
function displayWeatherInfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    card.textContent = '';
    card.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');


    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(2)}°C`;
    tempDisplay.classList.add('tempDisplay');
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');
    card.appendChild(humidityDisplay);

    descriptionDisplay.textContent = description;
    descriptionDisplay.classList.add('descriptionDisplay');
    card.appendChild(descriptionDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('weatherEmoji');
    card.appendChild(weatherEmoji);

}

// Function to get the weather emoji based on the weather id.
function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId < 300:
            return '⛈️';
        case weatherId < 600:
            return '🌧️';
        case weatherId < 700:
            return '❄️';
        case weatherId < 800:
            return '🌫️';
        case weatherId === 800:
            return '☀️';
        case weatherId === 801:
            return '🌤️';
        case weatherId < 805:
            return '☁️';
        default:
            return 'No Clue!';
    }
}

// Function to display error message on the card.
function displayError(message) {

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}

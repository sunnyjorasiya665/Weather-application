const apiKey = "8e9764677bf4a7a9deefd5d180c2fa57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");
const detailsContainer = document.querySelector(".details");

searchBtn.addEventListener("click", () => {
    const cityName = searchInput.value.trim();
    if (cityName !== "") {
        checkWeather(cityName);
    }
});

async function checkWeather(cityName) {
    try {
        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        // Update weather details
        weatherContainer.classList.remove("hidden");
        weatherContainer.querySelector(".temp").textContent = data.main.temp + "°C";
        weatherContainer.querySelector(".city").textContent = data.name;

        // Update other weather details
        detailsContainer.classList.remove("hidden");
        detailsContainer.querySelector(".humidity").textContent = data.main.humidity + "%";
        detailsContainer.querySelector(".wind").textContent = data.wind.speed + "km/h";
        detailsContainer.querySelector(".max").textContent = data.main.temp_max + "°C";
        detailsContainer.querySelector(".min").textContent = data.main.temp_min + "°C";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

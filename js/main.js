'use strict'; //The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features



const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city");
const weatherReport = document.getElementById("weather-report");

let apiRequest = new XMLHttpRequest();



cityForm.addEventListener("submit", ($event) => {
    $event.preventDefault();
    const chosenCity = cityInput.value;
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
    apiRequest.send();
});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            return weatherReport.textContent = "City you entered not found"
        }
    }
    const response = JSON.parse(apiRequest.response);
    weatherReport.textContent = "The weather in " + response.name + " is " + response.weather[0].main;
};
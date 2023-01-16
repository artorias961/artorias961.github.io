/*
Reference Link: https://nordicapis.com/how-to-build-an-api-driven-weather-app/
Reference Link: https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners
API Link: https://openweathermap.org

Source:
-> Creating a weather application using an OpenWeatherMap API
-> Need to make an account with OpenWeatherMap, navigate to API tab, locate Current Weather Data API, select MY API Keys, and DO NOT SHARE IT WITH ANYONE
*/

// API Key 
const api = 'fed0afc47c4d863eb51eceea2b30b284';

// DOM Elements (interface for HTML elements)
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

// Add eventListener that runs a function every time the page is loaded
window.addEventListener('load', ()=> {
    // Inside the function
    let long;
    let lat;

    // Accessing Geolocation of User 
    if (navigator.geolocation) {
        // Checks to see if the object can be retrieved by the browser
        navigator.geolocation.getCurrentPosition((position) => {
            // Inside the function, storing longitude and latitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // Creating a base website to get the information (long, lat, and api)
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

            // Calls back to get the data
            fetch(base)
                // Get a response
                .then((response) =>{
                    return response.json();
                })
                // Calls back to get the data
                .then((data) => {
                    // Once you are able to get the data then store the variables (feels_like is kelvin degrees)
                    const {temp, feels_like} = data.main;
                    const place = data.name;
                    const {description, icon} = data.weather[0];
                    const {sunrise, sunset} = data.sys;

                    // Getting the URL Icon
                    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

                    // Getting the temperature in Fahrenheit
                    const fahrenheit = (temp * 9) / 5 + 32;

                    // Converting Epoch(Unix) time to GMT
                    const sunriseGMT = new Date(sunrise * 1000);
                    const sunsetGMT = new Date(sunset * 1000);

                    // Interacting with DOM to show data
                    iconImg.src = iconURL;
                    loc.textContent = `${place}`;
                    desc.textContent = `${description}`;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                    sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                    sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
                });
        },
        // errorCallback Geolocation: creating another function for error (THIS GIVES YOU THE ERROR AND ACTUALLY HELPS)
        (error) =>{
            // Print the error
            console.log("Check the console log by using the inpect tool to see these errors!!!")
            console.log("So far works on EDGE but not vivaldi")
            console.log(error);
        },
        // Options for Geolocation: adding a timeout to wait for the navigator.geolocation to work
        {timeout: 10000, enableHighAccuracy: true, maximumAge: 75000});
    }
});


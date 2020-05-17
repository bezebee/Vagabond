
//api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&APPID=5e27cf085bbe7c169960470c30456c13

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".weather-icon");
const notificationElement = document.querySelector(".notification");

//App data

const weather = {};

weather.temperature = {
    unit: "celsius"
}

//App constants and variables
const KELVIN = 273;
//API KEY
const key = "5e27cf085bbe7c169960470c30456c13";

//Check if browser supports geolocation

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display="block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

//Set users position
function setPosition(position){
    let latitude=position.coords.latitude;
    let longitude=position.coords.latitude;

    getWeather(latitude, longitude);
}

//show error when there is an issue with geolocation service

function showError(error){
    notificationElement.style.display="block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

//Get weather from API provider
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}`;

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    })
}

//Displaying weather to UI

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city},${weather.country}`;
}

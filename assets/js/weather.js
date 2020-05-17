
// //api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&APPID=5e27cf085bbe7c169960470c30456c13

// //App constants and variables
// const KELVIN = 273;
// //API key
// const key = "5e27cf085bbe7c169960470c30456c13";

// function getWeather(latitude, longitude){
//     let api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
//     fetch(api).then(function(response){
//         let data = response.json();
//         return data;
//     })
//     .then(function(data){
//         weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//         weather.description = data.weather[0].description;
//         weather.iconId = data.weather[0].icon;
//         weather.city = data.name;
//         weater.country = data.sys.country;
//     })
//     .then
// }



// // const weather = {

// //     temperature:{
// //         value:18,
// //         unit: "celsius"
// //     },
// //     description: "few clouds",
// //     iconId: "01d",
// //     city: "London",
// //     country: "GB"
// // }

// // /*---Reusable function-----*/
// // displayWeather(){
// // iconElement.innerHTML=
// // `<img src="icons/${weather.iconId}.png"/>`;

// // iconElement.innerHTML=
// // `${weather.temperature.value}°<span>C</span>`;

// // descElement.innerHTML=
// // weather.description;

// // locationElement.innerHTML =
// // `${weather.city},${weather.country}`;
// // }
// // /*------------Converting from Kalvins to Celsius-----*/
// // weather.temperature.value = 300-273
// // /*---------Converting from Celsius to Farenheit-------*/
// // function celsiusToFarenheit( temperature  ){
// // return (temperature *9/5) +32;
// // }

// // tempElement.addEventListener("click", function(){
// //     if(weather.temperature.unit === "celsius"){
// //         celsiusToFarenheit(weather.temperature.value);
// //         farenheit = Math.floor(farenheit);
// //         tempElement.innerHTML = `${farenheit}°<span>F</span>`;
// //         weather.temperature.unit = "farenheit";
// //     } else {
// //         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
// //         weather.temperature.unit = "celsius";
// //     }
// // })

// // getCurrentPosition(setPosition, error );

// // function setPosition(position){
// // let latitude = position.coords.latitude;
// // let latitude = position.coords.longitude;
// // getWeather(latitude, longitude);
// // }

// // function showError(error){
// // notificationElement.style.display="block";
// // notificationElement.innerHTML=`<p> ${error.message}</p>`;
// // }

// // if("geolocation" in navigator){
// //     navigator.geolocation.getCurrentPosition ( setPosition, showError );
// // }else{
// //     notificationElement.style.display = "block";
// //     notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
// // }
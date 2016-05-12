/**
 * Created by chris_000 on 13/04/2016.
 */
var loc = document.getElementById("location");
//var weather = document.getElementById("weather");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}
/*
 function showPosition(position) {

 loc.innerHTML = "Latitude: " + position.coords.latitude +
 "<br>Longitude: " + position.coords.longitude;
 getWeather(position.coords.latitude, position.coords.longitude);
 }
 */

var tempCelcius,
    tempFarenheit,
    temperature;

function getWeather(position) {

    //get data from API
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&APPID=36156739ccff3f83d40b8270576b7209", function (weatherData) {
// deal with the data
        tempCelcius = weatherData.main.temp;
        tempFarenheit = Math.round(weatherData.main.temp * 1.8 + 32);
        temperature = tempCelcius;


        console.log(weatherData);
        document.getElementById("main").innerHTML = weatherData.weather[0].main;
        document.getElementById("temp").innerHTML = tempCelcius + " &degC";
        document.getElementById("location").innerHTML = "The current weather in " + weatherData.name + " is:";

        showImage("http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png", "weather icon");
    });

    function showImage(src, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.alt = alt;

        // This next line will just add it to the <body> tag
        document.getElementById("iconAnchor").appendChild(img);
    }


}
function convertTemp() {
    if (temperature === tempCelcius) {
        temperature = tempFarenheit;
        document.getElementById("temp").innerHTML = tempFarenheit + " &degF";

    }
    else if (temperature === tempFarenheit) {
        temperature = tempCelcius;
        document.getElementById("temp").innerHTML = tempCelcius + "&degC";

    }
}

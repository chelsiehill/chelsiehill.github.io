let weatherSummary3 = new XMLHttpRequest();
let apiURLstring4 = 'https://api.openweathermap.org/data/2.5/weather?id=4372777&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherSummary3.open('Get',apiURLstring4, true);
weatherSummary3.send();

weatherSummary3.onload = function() {
    let weatherData = JSON.parse(weatherSummary3.responseText);
    console.log (weatherData);
    document.getElementById('tempw').innerHTML = weatherData.main.temp_max;
    document.getElementById('currently').innerHTML = weatherData.weather[0].description;
 

}
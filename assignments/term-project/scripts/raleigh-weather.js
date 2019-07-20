let weatherSummary5 = new XMLHttpRequest();
let apiURLstring5 = 'https://api.openweathermap.org/data/2.5/weather?id=4819310&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherSummary5.open('Get',apiURLstring5, true);
weatherSummary5.send();

weatherSummary5.onload = function() {
    let weatherData = JSON.parse(weatherSummary5.responseText);
    console.log (weatherData);
    document.getElementById('tempr').innerHTML = weatherData.main.temp_max;
    document.getElementById('currently').innerHTML = weatherData.weather[0].description;
   

}
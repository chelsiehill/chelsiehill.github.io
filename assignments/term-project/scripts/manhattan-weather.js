
let weatherSummary = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?id=4274994&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherSummary.open('Get',apiURLstring3, true);
weatherSummary.send();

weatherSummary.onload = function() {
    let weatherData = JSON.parse(weatherSummary.responseText);
    console.log (weatherData);
    document.getElementById('tempm').innerHTML = weatherData.main.temp_max;
    document.getElementById('currently').innerHTML = weatherData.weather[0].description;
   

}
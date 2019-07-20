let weatherSummary1 = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5164390&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherSummary1.open('Get',apiURLstring2, true);
weatherSummary1.send();

weatherSummary1.onload = function() {
    let weatherData = JSON.parse(weatherSummary1.responseText);
    console.log (weatherData);
    document.getElementById('tempp').innerHTML = weatherData.main.temp_max;
    document.getElementById('currently').innerHTML = weatherData.weather[0].description;
   

}
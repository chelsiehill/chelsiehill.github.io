let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(1);
}
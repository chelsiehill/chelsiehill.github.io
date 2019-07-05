let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let forecastData = JSON.parse(weatherRequest.responseText);
    console.log(forecastData);
   
    var weekday = new Array(7);
    weekday[0] ="Monday";
    weekday[1] ="Tuesday";
    weekday[2] ="Wednesday";
    weekday[3] ="Thursday";
    weekday[4] ="Friday";
    weekday[5] ="Saturday";
    weekday[6] ="Sunday";

    let count = 1;

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            document.getElementById('degreeforecast' +count).innerHTML=forecastData.list[i].main.temp_max;
            document.getElementById('imgforecast'+count).setAttribute('src', "https://openweathermap.org/img/w/"+forecastData.list[i].weather[0].icon + ".png");
            document.getElementById('dayforecast' +count).innerHTML=weekday[(new Date().getDay()+count-1)%7];
            count ++;
    }
    if (count==6){
        break;
    }
}
}



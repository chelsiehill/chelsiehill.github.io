var section = document.querySelector('main');
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;
    let towns = towndata['towns'];

    let output = document.querySelector('main');

    towns.forEach(town => {
        if (town.name == 'Preston') {
            document.getElementById("PrestonCurrentEvents").innerHTML = town.events;
        }
    }
    )
} 
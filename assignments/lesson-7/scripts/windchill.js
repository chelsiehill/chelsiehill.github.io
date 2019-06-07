//input
let temp = parseInt(document.getElementById('temp').innerHTML);
let windspeed = parseInt(document.getElementById('windspeed').innerHTML);

//process
let windchill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

//output
document.getElementById('windchill').innerHTML = windchill.toFixed(1);












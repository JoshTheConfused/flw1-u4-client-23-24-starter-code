let highText = document.getElementById("high");
let lowText = document.getElementById("low");
let high;
// high = {api call} => high temp as int
let low;
// low = {api call} => low temp as int
let rain;
// rain = {api call} => 0:none, 1:moderate, 2:heavy

// highText.innerHTML = `high: ${high}`
// lowText.innerHTML = `low: ${low}`

let headwearDiv = document.getElementById("headwear");
let jacketDiv = document.getElementById("jacket");
let shirtDiv = document.getElementById("shirt");
let pantsDiv = document.getElementById("pants");
let shoesDiv = document.getElementById("shoes");

// based on the weather data, determine the appropriate outfit, and load the corresponding description and image for each piece of clothing

// sign up for api here: https://openweathermap.org/api
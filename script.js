const key = "3e9bc118a4df0e6fbe5825567671d11d";
const lat = 40.71423095312353; 
const lon = -73.97922364701996;
let temp;
let weather;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`).then(response => response.json()).then(data => {
  console.log(data);
  temp = data.main.temp;
  weather = data.weather[0];
  
  document.getElementById("temp").innerHTML = `Temp: ${Math.round(temp)} degrees Fahrenheit`;
  document.getElementById("precip").innerHTML = `Precipitation: ${precipIntensity(weather)}`
});

let headwearDiv = document.getElementById("headwear");
let jacketDiv = document.getElementById("jacket");
let shirtDiv = document.getElementById("shirt");
let pantsDiv = document.getElementById("pants");
let shoesDiv = document.getElementById("shoes");

// based on the weather data, determine the appropriate outfit, and load the corresponding description and image for each piece of clothing

function precipIntensity(weather) {
  let intensity; // 0 = no precipitation --> 5 = heavy precipitation
  let desc = weather.description;
  if (desc.includes("very heavy")) {
    intensity = 5;
  }
  else if (desc.includes("heavy")) {
    if (desc.includes("rain") || desc.includes("shower") || desc.includes("snow")) {
      intensity = 4;
    }
    else if (desc.includes("drizzle")) {
      intensity = 3;
    }
  }
  else if (desc.includes("light")) {
    if (desc.includes("rain") || desc.includes("snow")) {
      intensity = 2;
    }
    else if (desc.includes("drizzle")) {
      intensity = 1;
    }
  }
  else if (weather.id < 700) {
    intensity = 3;
  }
  else {
    intensity = 0;
  }

  let myDesc;
  switch (intensity) {
    case 0:
      myDesc = "No precipitation";
      break;
    case 1:
      myDesc = "Very light precipitation";
      break;
    case 2:
      myDesc = "Light precipitation";
      break;
    case 3:
      myDesc = "Moderate precipitation";
      break;
    case 4:
      myDesc = "Heavy precipitation";
      break;
    case 5:
      myDesc = "Very heavy precipitation";
      break;
  }
  return myDesc;
}
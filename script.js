let headwearDiv = document.getElementById("headwear");
let jacketDiv = document.getElementById("jacket");
let shirtDiv = document.getElementById("shirt");
let pantsDiv = document.getElementById("pants");
let shoesDiv = document.getElementById("shoes");

const key = "3e9bc118a4df0e6fbe5825567671d11d";
const lat = 40.71423095312353; 
const lon = -73.97922364701996;
let temp;
let weather;
let intensity;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`).then(response => response.json()).then(data => {
  console.log(data);
  temp = data.main.temp;
  weather = data.weather[0];
  intensity = precipIntensity(weather);
  
  document.getElementById("temp").innerHTML = `Temp: ${Math.round(temp)} degrees Fahrenheit`;
  document.getElementById("precip").innerHTML = `Precipitation: ${precipDesc(intensity)}`

  // Headwear
  let headwear;
  if (intensity >= 1) {
    headwear = "https://img.idilego.hu/p/26/77348/1615201963-278525-big.jpg";
  }
  else if (temp >= 75) {
    headwear = "https://www.dallasgeneralwholesale.com/cdn/shop/products/WHOLESALE-BIG-HUGE-WIDE-BRIM-SUMMER-GARDEN-STRAW-HAT.jpg?v=1588309148";
  }
  else {
    headwear = "https://m.media-amazon.com/images/I/61VTAIY2mFL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  }
  let headwearImg = document.createElement("img");
  headwearImg.src = headwear;
  headwearDiv.appendChild(headwearImg);

  // Jacket

  // Shirt

  // Pants

  // Shoes
  let shoes;
  if (temp <= 10) {
    shoes = "https://www.gearelevation.com/cdn/shop/products/red-rain-boots-thick-bottom-big-red-boots-787338_700x700.jpg?v=1691498131";
  }
  else if (temp <= 32) {
    shoes = "https://images.timberland.com/is/image/timberland/10061713-HERO?hei=650&wid=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0";
  }
  else {
    if (intensity <= 1) {
      if (temp >= 75) {
        shoes = "https://images.stockx.com/images/Balenciaga-x-Crocs-Madame-80MM-Black-W.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1637172192&q=60";
      }
      else {
        shoes = "https://footwearnews.com/wp-content/uploads/2023/11/171545C_A_107X1-1.jpg?w=644";
      }
    }
    else if (intensity <= 3) {
      shoes = "https://images.timberland.com/is/image/timberland/10061713-HERO?hei=650&wid=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0";
    }
    else {
      shoes = "https://www.gearelevation.com/cdn/shop/products/red-rain-boots-thick-bottom-big-red-boots-787338_700x700.jpg?v=1691498131";
    }
  }
  let shoeImg = document.createElement("img");
  shoeImg.src = shoes;
  headwearDiv.appendChild(shoeImg);
});

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
  return intensity;
}

function precipDesc(precipIntensity) {
  let myDesc;
  switch (precipIntensity) {
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
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
  let jacket;
  if (intensity >= 1) {
    jacket = "https://teaknewyork.com/cdn/shop/products/1091001_PAIKKA_Human_Visibility_Raincoat_leo_W_1800x1800_28f2ece4-d3f0-4adb-a5d7-9d36baede67b_2000x.webp?v=1677093032";
  }
  else if (temp < 40) {
    jacket = "https://www.semsem.com/cdn/shop/products/pink_faux_fur_jacket-front-optimized_1800x1800.jpg?v=1601993115";
  }
  else if (temp < 70) {
    jacket = "https://www.mrporter.com/variants/images/1647597320281710/in/w2000_q60.jpg";
  }
  else {
    jacket = "https://ih1.redbubble.net/image.4818281775.2256/ssrco,tote,cotton,canvas_creme,lifestyle,tall_portrait,750x1000-bg,f8f8f8.1.jpg";
  }

  let jacketImg = document.createElement("img");
  jacketImg.src = jacket;
  jacketDiv.appendChild(jacketImg);

  // Shirt
  let shirt;
  let rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    shirt = "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/saracamila/products/137456/shirt-1481588874-b8567ba56a70d9fd98cc1298896f29e1.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvY2F0ZWdvcmllcy9tZW5zL3NpemVzLyovc3R5bGVzL3RyaWJsZW5kLXRlZS9jb2xvcnMvKi9mcm9udC5wbmciXSwgeyJ4IjogNTU5LCAieSI6IDQ3MCwgImJhY2tncm91bmQiOiAiZjBmMGYyIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9";
  }
  else if (rand === 1) {
    shirt = "https://aade01b1a91c682e1e92-ec8939d490975661e239f5b2b5f886ec.ssl.cf2.rackcdn.com/product-hugerect-297130-73147-1394789642-118f899ad6de59efd3bd8874787e5641.394789643_type_hugerect_nid_297130_uid_73147_0";
  }
  else {
    shirt = "https://s3.dualstack.us-east-1.amazonaws.com/static.customizedgirl.com/images/design/3130c34eea707c1d64d455b6e26e4e50_4639870_0_bigger.jpg";
  }

  let shirtImg = document.createElement("img");
  shirtImg.src = shirt;
  shirtDiv.appendChild(shirtImg);

  // Pants
  let pants;
  if (weather.description.includes("snow") || temp <= 32) {
    pants = "https://cdn.backpacker.com/wp-content/uploads/2021/11/columbia-snowpants.jpg?width=1200";
  }
  else if (intensity >= 1) {
    pants = "https://static.grainger.com/rp/s/is/image/Grainger/8AGL7_AA01";
  }
  else if (temp > 75) {
    pants = "https://thestreetsofseoul.com/cdn/shop/files/Extra-Long-Vintage-Wash-Jorts-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing-8.webp?v=1716478865&width=800";
  }
  else {
    pants = "https://trippnyc.com/cdn/shop/files/AF3718_BLKBLK_B_1000x.jpg?v=1689264372";
  }

  let pantsImg = document.createElement("img");
  pantsImg.src = pants;
  pantsDiv.appendChild(pantsImg);

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
  shoesDiv.appendChild(shoeImg);
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
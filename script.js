const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector(".search-box");

//let weather_el = document.querySelector(".current .weather");
//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {

	let city = document.querySelector(".location .city");
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let now = new Date();
	let date = document.querySelector(".location .date");
	date.innerText = dateBuilder(now);

	let temp = document.querySelector(".current .temp");
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

	let weather_el = document.querySelector(".current .weather");
	weather_el.innerText = weather.weather[0].main;

	let hilow = document.querySelector(".hi-low");
	hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;

  if(weather_el.innerText == "Clouds") 
    document.getElementById("back-id").src="clouds.mp4";
  else if(weather_el.innerText == "Haze") 
    document.getElementById("back-id").src="haze.mp4";
  else if(weather_el.innerText == "Clear") 
    document.getElementById("back-id").src="clear.mp4";
  else if(weather_el.innerText == "Smoke") 
    document.getElementById("back-id").src="smoke.mp4";
  else if(weather_el.innerText == "Mist") 
    document.getElementById("back-id").src="mist.mp4";
  else if(weather_el.innerText == "Rain") 
    document.getElementById("back-id").src="rainy.mp4";

}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// // paste your secret key
// const api = {
//   key: "9f****************************", // your secrete key here
//   base_url: "https://api.openweathermap.org/data/2.5/",
// }

// // selecting the inputbox
// const searchbox = document.querySelector(".search-box");

// //adding keypress event listener to inputbox
// // Here are some of the most common event types and event names:
// // Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
// // Touch Events: touchstart, touchend, touchmove, touchcancel
// // Keyboard Events: keydown, keyup, keypress
// // Form Events: focus, blur, change, submit
// // Window Events: resize, scroll, load, unload, hashchange

// searchbox.addEventListener("keypress", setQuery);

// // when user enter city and and click the enter key then getResults function will invoked
// function setQuery(e) {
//   // 13 is key code for enter key
//   if (e.keyCode == 13) {
//       // calling getResults function and passing city name when click enter key
//       getResults(searchbox.value);
//       // console.log(searchbox.value);
//   }
// }

// // fetching the data from weather api
// function getResults(query) {
//   // qeury carries city name and we passes to the Api url so final url be looks like this 
//   // https://api.openweathermap.org/data/2.5/weather?q=London&unit=metric&APPID=9f9189f3ea73cf55b8cc02b2d5091f72

//   //so query passes to this URL to get data for the user-entered city name

//   fetch(`${api.base_url}weather?q=${query}&units=metric&APPID=${api.key}`)
//       .then(weather => {
//           return weather.json();
//       }).then(displayResults); // passing response (weather) object
// }



// function displayResults(weather) {
//   // console.log(typeof weather);

//   // accessing weather object and getting data

//   // selecting the element and setting the city and country name from api
//   let city = document.querySelector('.location .city');
//   city.innerText = `${weather.name}, ${weather.sys.country}`;

//   // setting current date, see the dateBuilder() function bellow
//   let now = new Date();
//   let date = document.querySelector('.location .date');
//   date.innerText = dateBuilder(now);

//   // selecting the element and setting the current temperature of city
//   let temp = document.querySelector('.current .temp');
//   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//   // selecting the element and setting the current weather of city like, 'sunny', 'cloudy'
//   let weather_el = document.querySelector('.current .weather');
//   weather_el.innerText = weather.weather[0].main;

//   // selecting the element and setting the current weather description of city
//   let weather_description = document.querySelector('.current .description');
//   weather_description.innerText = weather.weather[0].description;

//   // selecting the element and setting the current weather image/icon of city
//   let weather_icon = document.querySelector('.current .weather-icon img');
//   //console.log(weather.weather[0].icon);
//   weather_icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

//   // selecting the element and setting the current min and max temperature of city
//   let hilow = document.querySelector('.current .hi-low');
//   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

// }

// // returns today's date
// function dateBuilder(d) {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day}, ${date} ${month} ${year}`;
// }

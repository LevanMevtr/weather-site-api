const apiKey= "567a75b70d6db6bc8d80de090eb55de2"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchbox= document.getElementById("search")
const searchbtn= document.getElementById("btn")
const weatherIcon=document.getElementById("weather-icon")

async function checkweather(city){
  const response=await fetch(apiUrl+ city +`&appid=${apiKey}`)
  let data = await response.json()

  console.log(data)
  document.getElementById("cityName").innerHTML=data.name 
  document.getElementById("temp").innerHTML=Math.round(data.main.temp) + "°C";
  document.getElementById("humidity").innerHTML=data.main.humidity + "%";
  document.getElementById("wind").innerHTML=data.wind.speed + " Km/h";

  if (data.weather[0].main==="clouds"){
    weatherIcon.src = "weather/clouds"
  }
  else if (data.weather[0].main==="clear"){
    weatherIcon.src = "weather/clear"
  }
  else if (data.weather[0].main==="rain"){
    weatherIcon.src = "weather/rain"
  }
  else if (data.weather[0].main==="drizzle"){
    weatherIcon.src = "weather/drizzle"
  }
  else if (data.weather[0].main==="snow"){
    weatherIcon.src = "weather/snow"
  }
  else if (data.weather[0].main==="thunderstorm"){
    weatherIcon.src = "weather/thunderstorm"
  }
  else if (data.weather[0].main==="mist"){
    weatherIcon.src = "weather/atmosphere"
  } 
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
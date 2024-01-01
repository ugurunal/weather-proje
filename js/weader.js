import fetchWeatherData from "./api.js"
import { updateUI } from "./ui.js"

fetchWeatherData
 const selectors ={
    city:document.querySelector(".weather-city"),
    datetime: document.querySelector(".weather-datetime"),
    weatherForecast: document.querySelector(".weather-forecast"),
    weatherTemperature:document.querySelector(".weather-temperature"),
    weatherIcon:document.querySelector(".weather-icon"),
    weatherMinMax:document.querySelector(".weather-minmax"),
    weatherRealfeel:document.querySelector(".weather-realfell"),
    weatherHumidity:document.querySelector(".weather-humidity"),
    weatherWind:document.querySelector(".weather-wind"),
    weatherPressure:document.querySelector(".weather-pressure"),
    searchForm:document.querySelector(".weather-search"),
    searchInput:document.querySelector(".weather-searchform"),
    unitCelsius:document.querySelector(".weather-units-celsius"),
    unitFarenheit:document.querySelector(".weather-units-farenheit"),
    maxTemp:document.querySelector(".maxTemp")
}

let currCity="London"
let units="metric"
export async function getWeather(){
const data = await fetchWeatherData(currCity,units)
updateUI(data,selectors)

}

selectors.searchForm.addEventListener("submit",async(e)=>{
    e.preventDefault()
  currCity =  selectors.searchInput.value
 await getWeather()
 selectors.searchInput.value=""
})

selectors.unitCelsius.addEventListener("click",()=>{
   if(units!=="metric"){
    units="metric"
    getWeather()
   } 
})

selectors.unitFarenheit.addEventListener("click",()=>{
   if(units!=="inperial"){
    units="inperial"
    getWeather()
   } 
})

document.body.addEventListener("load",async()=>{
    await getWeather()
})
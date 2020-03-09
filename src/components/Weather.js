import React from 'react'
import {getBackgroundImage} from '../data/backgroundImg'
const Weather = ({country}) => {
    const {name,capital,languages,population,flag,current} = country
    const {temperature,humidity,feelslike,wind_speed,visibility,weather_descriptions,weather_icons} = current
    let bgImage = getBackgroundImage(current)
    const newLang = [...languages]
    const langArr = []
    for(const lang of newLang) {
      langArr.push(lang.name)
    }
    const weatherInfo = (
    <div className = 'weather-and-country' style = {{background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(${bgImage.bgImage})no-repeat center center/cover`, color : bgImage.color}}>
      <div className = "country">
        <div className = "flag-div">
          <img src = {flag} alt = "flag" className = "flag"></img>
        </div>
        <div className = "country-details">
          <div>Name : {name}</div>
          <div>Capital : {capital}</div>
          <div>Population : {population}</div>
          <div className = "languages">Languages:{langArr.toString()}</div>
        </div>
      </div> 
      <div className = "weather-info"> 
        <div className = "weather-div"> 
            <img src = {weather_icons} alt = 'weather' className = 'weather-image'></img>
        </div>
        <div className = "weather-details">
          <div>Temperature : {temperature}</div>
          <div>Humidity : {humidity}</div>
          <div>Feels Like : {feelslike}</div>
          <div>Wind Speed : {wind_speed}</div>
          <div>Visibility : {visibility}</div> 
          <div>{weather_descriptions}</div>
        </div>
      </div>
    </div>
    )
    return(
     <div >{weatherInfo}</div>
        )
  }


export default Weather

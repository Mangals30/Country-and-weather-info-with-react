import React from "react";
import { getBackgroundImage } from "../data/backgroundImg";
const Weather = ({ country }) => {
  const { name, capital, languages, population, current } = country;
  const {
    temperature,
    humidity,
    feelslike,
    wind_speed,
    visibility,
    weather_descriptions,
    weather_icons,
  } = current;
  let bgImage = getBackgroundImage(current);
  const weatherInfo = (
    <div
      className="weather-and-country"
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(${bgImage.bgImage})no-repeat center center/cover`,
        color: bgImage.color,
      }}
    >
      <div>
        <div>Name : {name}</div>
        <div>Capital : {capital}</div>
        <div>Population : {population}</div>
        <div>Languages:{languages.join(", ")}</div>
      </div>
      <div>
        <div>
          <img
            src={weather_icons}
            alt="weather"
            className="weather-image"
          ></img>
        </div>
        <div>
          <div>Temperature : {temperature}</div>
          <div>Humidity : {humidity}</div>
          <div>Feels Like : {feelslike}</div>
          <div>Wind Speed : {wind_speed}</div>
          <div>Visibility : {visibility}</div>
          <div>{weather_descriptions}</div>
        </div>
      </div>
    </div>
  );
  return <div>{weatherInfo}</div>;
};

export default Weather;

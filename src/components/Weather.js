import React from "react";
import Country from "./Country";
const Weather = ({ country }) => {
  if (!country.current) {
    return <Country country={country} />;
  }

  const { temp, humidity, feels_like, pressure } = country.current;

  const weatherInfo = (
    <div className="weather-and-country">
      <Country country={country} />
      <div className="country-info">
        <div>Temperature : {temp}</div>
        <div>Humidity : {humidity}</div>
        <div>Feels Like : {feels_like}</div>
        <div>Pressure : {pressure}</div>
      </div>
    </div>
  );
  return <div>{weatherInfo}</div>;
};

export default Weather;

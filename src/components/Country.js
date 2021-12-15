import React from "react";
import Weather from "./Weather";

const Country = (props) => {
  const { country } = props;
  const { name, capital, population, languages, current } = country;

  const countryInfo = (
    <div className="country-info">
      <div>Name : {name}</div>
      <div>Capital : {capital}</div>
      <div>Population : {population}</div>
      <div>Languages : {languages.join(", ")}</div>
    </div>
  );
  if (current) {
    return (
      <div>
        <Weather country={country} />
      </div>
    );
  } else {
    return <div>{countryInfo}</div>;
  }
};

export default Country;

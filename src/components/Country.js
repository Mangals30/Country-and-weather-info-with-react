import React from "react";

const Country = (props) => {
  const { country } = props;
  const { name, capital, population, languages } = country;

  const countryInfo = (
    <div className="country-info">
      <div>Name : {name}</div>
      <div>Capital : {capital}</div>
      <div>Population : {population}</div>
      <div>Languages : {languages.join(", ")}</div>
    </div>
  );

  return <div>{countryInfo}</div>;
};

export default Country;

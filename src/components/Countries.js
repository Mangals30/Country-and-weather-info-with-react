import React from 'react'
import Country from './Country'
import Loading from '../images/loading-image.gif'
const Countries = (props) => {
  
  const countriesList = props.countries.map(country => {
      
      return (<Country key = {country.name} country = {country}/>)
      
  })
  if(props.countries.length || props.searchWordLength)
    return (
        <div className = "CountriesList">
            {countriesList}
        </div>
    )

    return (
    <div className = "loading-div">
    <img src = {Loading} alt = "loading"></img>
    </div>
    )
}

export default Countries

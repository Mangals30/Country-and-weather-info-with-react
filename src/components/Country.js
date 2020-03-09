import React from 'react'
import Weather from './Weather'

const Country = (props) => {
    
    const {country} = props
    const {name,capital,languages,population,flag,current} = country
    const newLang = [...languages]
    const langArr = []
    for(const lang of newLang) {
      langArr.push(lang.name)
    }
        
    
    const countryInfo = (
      <div className = "country-info">
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
       </div>
      )
      if(current) {
        return (
          <div>
            <Weather
            
            country = {country}/>
          </div>
        ) 
      }
      else {
          return(
            <div>{countryInfo}</div>
                )
      }
}
    
export default Country

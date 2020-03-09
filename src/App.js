import React, {Component} from 'react'
import './App.css'
import Search from './components/Search'
import Countries from './components/Countries'


class App extends Component  {
  constructor(props) {
    super(props)
    this.state  = {
      countries : [],
      allCountries : [],
      countryName : '',
    }
  }
  
  handleChange =(e) => {
    const{value} = e.target
    const countries = []
    this.setState({countryName : value})
    for(const country of this.state.allCountries) {
      const {name,capital,languages} = country
      const lowerCaseName = name.toLowerCase()
      const lowerCaseCapital = capital.toLowerCase()
      const lowerCaseLang = languages.toString().toLowerCase()  
      const lowerCaseVal = value.toLowerCase()
      if(lowerCaseName.includes(lowerCaseVal) || lowerCaseCapital.includes(lowerCaseVal) || lowerCaseLang.includes(lowerCaseVal)) {
        countries.push(country)
  }
  }
    
  this.setState({countries})
  }

  componentDidUpdate(prevProps,prevState) {
    const countries = []
    const copiedCountries = [...this.state.countries]
    if(prevState.countries.length ===1) {
      if(copiedCountries.length > 1) {
        for(const country of copiedCountries) {
          delete country.current
          countries.push(country)
          this.setState({countries})
        }
      }
    }

    if(prevState.countries.length >1) {
      if(copiedCountries.length === 1) {
      for(const country of copiedCountries) {
       const weatherUrl =`http://api.weatherstack.com/current?access_key=0a27ae9bdf271c9cb1b2edaa89d900f9&query=${country.capital}`
      fetch(weatherUrl).then(response => response.json()).then(weatherData => {
        country.current = weatherData.current
        countries.push(country)
        this.setState({countries})
     })
      }
    }
      }
  }

  componentDidMount() {
    const countriesUrl = 'https://restcountries.eu/rest/v2/all'
    fetch(countriesUrl).then(response => response.json()).then(countriesData => {
      const countries = []
      for (const element of countriesData) {
      const {name,capital,population,languages,currencies,flag} = element
      countries.push({name,capital,population,languages,currencies,flag})
      }  
          this.setState({countries : countries})
          this.setState({allCountries:countries})
    })
    
  }
  
  render () {
    return (
      <div className = 'App'>
        <Search
        countryName = {this.state.countryName}
        onChange = {this.handleChange}
        totalLength = {this.state.allCountries.length}
        searchLength = {this.state.countries.length}
        />
        <Countries
        countries = {this.state.countries}
        searchWordLength = {this.state.countryName.length}
        />
      </div>
    )

  }
  
}

export default App


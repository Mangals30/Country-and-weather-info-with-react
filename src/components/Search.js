import React from 'react'


const Search = (props) => {
    const {countryName,onChange,totalLength,searchLength} = props
    return (
        <div className = 'search-div'>  
        {
            totalLength ? (<h2>Currently we have {totalLength} countries</h2>) : ''
        }
            
        {
            countryName.length ? (<h3><i>{searchLength} countries satisfied the search criteria</i></h3>) : ''
        }
            <input type = "text" name = "countryName" placeholder = "Search by country, capital or language" value = {countryName} onChange = {onChange} className = 'search-input'></input>
        </div>
    )
}

export default Search

import { useEffect, useState } from 'react'
import './App.css'
import FilterField from './components/FilterField'
import countryService from './services/countries'

const Countrylist = ({ filter, filteredList, foundCountry, setFoundCountry }) => {
  if (filter === '') {
    return <p>Search for a country</p>
  }

  if (filteredList.length > 10 ) {
    if (foundCountry) {
      setFoundCountry(null)
      // TODO: Cannot update a component (`App`) while rendering a different component (`Countrylist`).
      console.log('reset country')
    }
    return <p>Too many matches, specify another filter</p>
  }

  // Jos löytyy, renderöi tiedot
  // NOTE: ilman !foundCountrya haki jatkuvasti tiedot apista uudestaan
  if (filteredList.length === 1 && !foundCountry) {
    countryService
      .getCountry(filteredList[0])
      .then(countryData => {
        setFoundCountry(countryData)
      })
      .catch(err => console.log('Failed to fetch the country'))
  } else {
    return (
      <ul>
        {filteredList.map(country =>
          <li key={country}>{country}</li>
        )}
      </ul>
    )
  }
}

const CountryDisplay = ({ foundCountry }) => {
  if (foundCountry) {
    return (
      <p>{foundCountry.capital}</p>
    )
  }
}

function App() {
  const [filter, setFilter] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [countries, setCountries] = useState([])
  const [foundCountry, setFoundCountry] = useState(null)

  // Nimien haku
  useEffect(() => {
    countryService
    .getAll()
    .then(countryData => {
      const countryNames = countryData.map(country => country.name.common)
      setCountries(countryNames)
    })
    .catch(err => console.log('Failed to fetch country names'))
  }, [])

  // Listan filtteröinti
  useEffect(() => {
    const filtered = countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
    setFilteredList(filtered)
  }, [filter])

  return (
    <>
      <h1>Hei</h1>
      <FilterField
        filter={filter}
        setFilter={setFilter}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        countries={countries}
      />
      <Countrylist 
        filter={filter}
        countries={countries}
        filteredList={filteredList}
        foundCountry={foundCountry}
        setFoundCountry={setFoundCountry}
      />
      <CountryDisplay 
        foundCountry={foundCountry}
      />
    </>
  )
}

export default App

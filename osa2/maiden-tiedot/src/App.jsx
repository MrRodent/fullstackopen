import { useEffect, useState } from 'react'
import './App.css'
import FilterField from './components/FilterField'
import countryService from './services/countries'
import CountryList from './components/CountryList'
import FoundCountryDisplay from './components/FoundCountryDisplay'
import Title from './components/Title'

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

    if (filtered.length > 1) setFoundCountry(null)
    setFilteredList(filtered)
  }, [filter])

  return (
    <>
      <Title foundCountry={foundCountry} />
      <FilterField
        filter={filter}
        setFilter={setFilter}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        countries={countries}
      />
      <CountryList 
        filter={filter}
        countries={countries}
        filteredList={filteredList}
        foundCountry={foundCountry}
        setFoundCountry={setFoundCountry}
      />
      <FoundCountryDisplay 
        foundCountry={foundCountry}
      />
    </>
  )
}

export default App

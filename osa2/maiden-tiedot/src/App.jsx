import { useEffect, useState } from 'react'
import './App.css'
import FilterField from './components/FilterField'
import countryService from './services/countries'

const Countries = ({ filter, filteredList }) => {
  if (filter === '') {
    return <p>Search for a country</p>
  }

  if (filteredList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  return (
    <ul>
      {filteredList.map(country =>
        <li key={country}>{country}</li>
      )}
    </ul>
  )
}

function App() {
  const [filter, setFilter] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
    .getAll()
    .then(countryData => {
      const countryNames = countryData.map(country => country.name.common)
      setCountries(countryNames)
    })
    .catch(err => console.log('Failed to fetch country names'))
  }, [])

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
      <Countries 
        filter={filter}
        countries={countries}
        filteredList={filteredList}
      />
    </>
  )
}

export default App

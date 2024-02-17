import { useEffect, useState } from 'react'
import './App.css'
import FilterField from './components/FilterField'
import countryService from './services/countries'
import weatherService from './services/weather'
import CountryList from './components/CountryList'
import FoundCountryDisplay from './components/FoundCountryDisplay'
import Title from './components/Title'
import WeatherDisplay from './components/WeatherDisplay'


function App() {
  const [filter, setFilter] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [countries, setCountries] = useState([])
  const [foundCountry, setFoundCountry] = useState(null)
  const [isFound, setIsFound] = useState(false)
  const [weather, setWeather] = useState(null)

  // Nimien haku
  useEffect(() => {
    countryService
    .getAll()
    .then(countryData => {
      const countryNames = countryData.map(country => country.name.common)
      setCountries(countryNames)
    })
    .catch(err => console.error('Failed to fetch country names'))
  }, [])

  useEffect(() => {
    foundCountry ? setIsFound(true) : setIsFound(false)
  }, [foundCountry])

  // Listan filtteröinti
  useEffect(() => {
    const filtered = countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))

    if (filtered.length > 1) {
      setFoundCountry(null) 
      setWeather(null)
    }
    setFilteredList(filtered)
  }, [filter])

  // Säätietojen haku
  useEffect(() => {
    if (isFound) {
      if (!weather) {
        weatherService
        .getWeather(foundCountry.capital)
        .then(weatherData => {
          setWeather(weatherData)
        })
        .catch(err => console.error('Failed to fetch weather data'))
      }
    }
  }, [isFound])

  return (
    <>
      <Title foundCountry={foundCountry} />
      <FilterField
        filter={filter}
        setFilter={setFilter}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        countries={countries}
        foundCountry={foundCountry}
      />
      <CountryList 
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        filteredList={filteredList}
        foundCountry={foundCountry}
        setFoundCountry={setFoundCountry}
      />
      <FoundCountryDisplay 
        foundCountry={foundCountry}
      />
      <WeatherDisplay 
        foundCountry={foundCountry}
        weather={weather}
      />
    </>
  )
}

export default App

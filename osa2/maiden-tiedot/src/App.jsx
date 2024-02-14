import { useState } from 'react'
import './App.css'
import FilterField from './components/FilterField'
import CountryService from './services/countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState(['Espanja', 'Suomi'])

  // TODO: jos filtterin ehdon täyttäviä maita > 10, tarkennuskehote
  // jos <= 10, näytetään hakuehdon täyttävät maat
  // kun enää 1, näytetään perustiedot, lippu sekä puhutut kielet

  // Testimappaus
  const Countries = () => {
    return (
      <ul>
        {countries.map(country =>
          <li key={country}>{country}</li>
        )}
      </ul>
    )
  }

  return (
    <>
      <h1>Hei</h1>
      <FilterField
        filter={filter}
        setFilter={setFilter}
      />
      <Countries />
    </>
  )
}

export default App

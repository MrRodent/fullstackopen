import countryService from '../services/countries'

const fetchCountry = (country, setFoundCountry) => {
  countryService
    .getCountry(country)
    .then(countryData => {
      setFoundCountry(countryData)
    })
    .catch(err => console.error('Failed to fetch the country'))
}

const ShowButton = ({ country, setFoundCountry }) => {
  const handleButton = () => {
    fetchCountry(country, setFoundCountry)
  }

  return <button onClick={handleButton}>show</button>
}

const CountryList = ({ filter, filteredList, foundCountry, setFoundCountry }) => {
  if (foundCountry) return null

  if (filter === '') {
    return <p>Search for a country</p>
  }

  if (filteredList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  // Jos löytyy, renderöi tiedot
  if (filteredList.length === 1) {
    fetchCountry(filteredList[0], setFoundCountry)
  } else {
    return (
      <ul>
        {filteredList.map(country =>
          <li key={country}>
            <ShowButton 
              country={country}
              setFoundCountry={setFoundCountry}
              />
            {country}
          </li>
        )}
      </ul>
    )
  }
}

export default CountryList
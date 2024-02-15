import countryService from '../services/countries'

const CountryList = ({ filter, filteredList, foundCountry, setFoundCountry }) => {
  if (foundCountry) return

  if (filter === '') {
    return <p>Search for a country</p>
  }

  if (filteredList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  // Jos löytyy, renderöi tiedot
  if (filteredList.length === 1) {
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

export default CountryList
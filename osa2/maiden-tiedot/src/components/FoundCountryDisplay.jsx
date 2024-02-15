const FoundCountryDisplay = ({ foundCountry }) => {
  if (foundCountry) {
    const languages = []
    for (let key in foundCountry.languages) {
      const lang = foundCountry.languages[key]
      languages.push(lang)
    }
    const languageString = languages.join(', ')

    const continents = []
    for (let key in foundCountry.continents) {
      const lang = foundCountry.continents[key]
      continents.push(lang)
    }
    const continentString = continents.join(', ')

    return (
      <div>
        <h2>{foundCountry.name.common}</h2>
        <div>Capital: <strong>{foundCountry.capital}</strong></div>
        <div>Area: <strong>{foundCountry.area}</strong> km²</div>
        <img src={foundCountry.flags.png} alt={foundCountry.flags.png} />
        <div>Continent: <strong>{continentString}</strong></div>
        <div>Languages: <strong>{languageString}</strong></div>
      </div>
    )
  }
}

export default FoundCountryDisplay
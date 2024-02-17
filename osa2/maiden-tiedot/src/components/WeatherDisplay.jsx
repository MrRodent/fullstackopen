const WeatherDisplay = ({ foundCountry, weather }) => {
  if (foundCountry && weather) {
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  
    return (
      <div>
        <hr />
        <h3>Weather in {foundCountry.capital}</h3>
        <img 
          src={weatherIcon} 
          style={{marginTop: '0', marginBottom: '0'}}
        />
        <div 
          style={{fontSize: 'small', marginTop: '0', marginBottom: '1rem'}}>
          <em>{weather.weather[0].description}</em>
        </div>
        <div>Temperature: <strong>{weather.main.temp} °C</strong></div>
        <div>Wind: <strong>{weather.wind.speed} m/s</strong></div>
      </div>
    )
  }
}

export default WeatherDisplay
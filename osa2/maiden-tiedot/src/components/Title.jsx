const Title = ({ foundCountry }) => {
  let nativeNames
  let firstNativeName
  let flag = '👋'

  if (foundCountry) {
    nativeNames = foundCountry.name.nativeName
    firstNativeName = Object.values(nativeNames)[0].common
    flag = foundCountry.flag
  }
  
  const title = foundCountry ? firstNativeName : 'Hei!';
  return <h1>{title} {flag}</h1>
}

export default Title
const EmptyButton = ({ foundCountry, setFilter }) => {
  if (!foundCountry) return null

  const handleButton = () => {
    setFilter('')
  }
  return <button onClick={handleButton}>empty</button>
}

const FilterField = ({ filter, setFilter, foundCountry }) => {
  const handleInputChange = (event) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <>
      <input 
        value={filter}
        onChange={handleInputChange}
        placeholder='start typing here'
      />
      <EmptyButton 
        foundCountry={foundCountry}
        setFilter={setFilter}
      />
    </>
  )
}
 
export default FilterField
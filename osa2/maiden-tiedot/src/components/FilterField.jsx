const FilterField = ({ filter, setFilter }) => {
  const handleInputChange = (event) => {
    const value = event.target.value
    console.log(value)
    setFilter(value)
  }

  return (
    <input 
      value={filter}
      onChange={handleInputChange}
    />
  )
}
 
export default FilterField
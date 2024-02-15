const FilterField = ({ filter, setFilter, filteredList, setFilteredList, countries }) => {
  const handleInputChange = (event) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <input 
      value={filter}
      onChange={handleInputChange}
      placeholder='start typing here'
    />
  )
}
 
export default FilterField
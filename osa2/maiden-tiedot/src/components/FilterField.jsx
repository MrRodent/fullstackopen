const FilterField = ({ filter, setFilter, filteredList, setFilteredList, countries }) => {
  const handleInputChange = (event) => {
    const value = event.target.value
    setFilter(value)
    const filtered = countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
    setFilteredList(filtered)
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
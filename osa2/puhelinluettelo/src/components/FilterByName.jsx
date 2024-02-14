const FilterByName = ({ filter, setFilter, setShowAll }) => {
  const handleInputChange = (event) => {
    // Muutetaan lowercaseksi jo täällä
    const value = event.target.value.toLowerCase();

    setFilter(value)
    if (value === '') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  return (
    <div>
      filter shown with
      <br />
      <input
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  )
}
 
export default FilterByName
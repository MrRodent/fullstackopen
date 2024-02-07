const NewPersonForm = (props) => {
  // Dekonstruktointi
  const {persons, newName, setNewName, newNumber, setNewNumber, setPersons} = props

  const addPerson = (event) => {
    event.preventDefault();

    // Tarkista onko nimi jo luettelossa
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))

    // Tyhjennä kentät
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return ( 
    <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={handleNameChange}
            placeholder='John Doe'
          />
        </div>
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
            placeholder='040-1234567'
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  ) 
}
 
export default NewPersonForm  
import contactService from '../services/contacts'

const NewPersonForm = (props) => {
  // Dekonstruktointi
  const {persons, newName, setNewName, newNumber, setNewNumber, setPersons, refreshContacts, setNotificationMsg} = props

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    }

    // Tarkista onko nimi jo luettelossa
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`Do you want to update the number of ${newName}?`)) {
        let person = persons.find(person => person.name === newName)
        contactService
          .update(person.id, personObject)
          .then(() => {
            refreshContacts()
          })
        return;
      }
    }

    contactService
      .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationMsg(`Added ${returnedPerson.name} to contacts`)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 5000);
        })
    
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
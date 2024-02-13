import { useState, useEffect } from 'react'
import PersonsDisplay from './components/PersonsDisplay'
import NewPersonForm from './components/NewPersonForm'
import Header from './components/Header'
import FilterByName from './components/FilterByName'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const refreshContacts = () => {
    contactService
    .getAll()
    .then(contactList => {
      setPersons(contactList)
    })
    .catch(err => {
      console.log('Failed to refresh contacts')
    })
  }

  // useEffect hookki
  // Hakee palvelimella olevat numerot
  useEffect(() => {
    refreshContacts()
  }, [])

  return (
    <div>
      <Header content='Phonebook'/>
      <FilterByName 
        persons={persons}
        filter={filter}
        setFilter={setFilter}
        setShowAll={setShowAll}
      />
      <Header content='Add a contact'/>
      <NewPersonForm 
        persons={persons} 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <Header content='Numbers'/>
      <PersonsDisplay 
        persons={persons}
        filter={filter}
        showAll={showAll}
        refreshContacts={refreshContacts}
      />
    </div>
  )

}

export default App
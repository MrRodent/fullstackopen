import { useState, useEffect } from 'react'
import PersonsDisplay from './components/PersonsDisplay'
import NewPersonForm from './components/NewPersonForm'
import Header from './components/Header'
import FilterByName from './components/FilterByName'
import contactService from './services/contacts'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [isErrorMsg, setIsErrorMsg] = useState(false)

  const Notification = ({ message }) => {
    if (message) {
      let type = 'success'
      if (isErrorMsg) {
        type = 'error'
      }
      return (
        <div className={`notification ${type}`}>
          {notificationMsg}
        </div>
      )
    }
  }

  // Hakee palvelimella olevat numerot
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
        refreshContacts={refreshContacts}
        setNotificationMsg={setNotificationMsg}
      />
      <Header content='Numbers'/>
      <Notification message={notificationMsg} />
      <PersonsDisplay 
        persons={persons}
        filter={filter}
        showAll={showAll}
        refreshContacts={refreshContacts}
        setPersons={setPersons}
        setNotificationMsg={setNotificationMsg}
        setIsErrorMsg={setIsErrorMsg}
      />
    </div>
  )

}

export default App
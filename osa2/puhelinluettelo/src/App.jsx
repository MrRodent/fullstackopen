import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsDisplay from './components/PersonsDisplay'
import NewPersonForm from './components/NewPersonForm'
import Header from './components/Header'
import FilterByName from './components/FilterByName'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  // useEffect hookki
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
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
      />
    </div>
  )

}

export default App
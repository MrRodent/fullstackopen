import { useState } from 'react'
import PersonsDisplay from './components/PersonsDisplay'
import NewPersonForm from './components/NewPersonForm'
import Header from './components/Header'
import FilterByName from './components/FilterByName'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

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
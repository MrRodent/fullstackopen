import Number from "./Number"

const PersonsDisplay = ({ persons, filter, showAll, refreshContacts }) => {
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter))

  return ( 
    <ul>
    {personsToShow.map(person => 
      <Number 
        key={person.name} 
        person={person} 
        refreshContacts={refreshContacts} 
      />
      )}
  </ul>
  )
}
 
export default PersonsDisplay
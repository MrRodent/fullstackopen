import Number from "./Number"

const PersonsDisplay = ({ persons, filter, showAll, refreshContacts, setPersons, setNotificationMsg, setIsErrorMsg }) => {
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
        persons={persons}
        setPersons={setPersons}
        setNotificationMsg={setNotificationMsg}
        setIsErrorMsg={setIsErrorMsg}
      />
      )}
  </ul>
  )
}
 
export default PersonsDisplay
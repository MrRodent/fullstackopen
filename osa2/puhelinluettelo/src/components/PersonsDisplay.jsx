import Number from "./Number"

const PersonsDisplay = ({ persons, filter, showAll }) => {
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter))

  return ( 
    <ul>
    {personsToShow.map(person => 
      <Number key={person.name} person={person} />
      )}
  </ul>
  )
}
 
export default PersonsDisplay
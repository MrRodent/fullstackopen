import contactService from '../services/contacts'


const Number = ({ person, refreshContacts, persons, setPersons, setNotificationMsg, setIsErrorMsg }) => {
  const handleButton = (person) => {
    if (window.confirm(`Remove ${person.name} from contacts?`)) {
      contactService
        .remove(person.id)
        .then(() => {
          refreshContacts()
        })
        .catch(err => {
          setIsErrorMsg(true)
          setNotificationMsg(`Information of ${person.name} has already been removed from the server`)
          // Luo uusi taulukko johon tulee kaikki muu paitsi olematon person.id
          setPersons(persons.filter(p => p.id !== person.id))

          setTimeout(() => {
            setIsErrorMsg(false)
            setNotificationMsg(null)
          }, 7000);
        })
    }    
  }

    return (
      <li>
        <strong>{person.name}</strong> <em>{person.number}</em>
        <button onClick={() => handleButton(person)}>delete</button>
      </li>
    )
  }

export default Number
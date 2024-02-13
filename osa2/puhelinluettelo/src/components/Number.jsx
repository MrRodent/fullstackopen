import contactService from '../services/contacts'

const Number = ({ person, refreshContacts }) => {
  const handleButton = (person) => {
    if (window.confirm(`Remove ${person.name} from contacts?`)) {
      contactService
        .remove(person.id)
        .then(() => {
          refreshContacts()
        })
    }    
  }

    return (
      <li>
        {person.name} {person.number}
        <button onClick={() => handleButton(person)}>delete</button>
      </li>
    )
  }

export default Number
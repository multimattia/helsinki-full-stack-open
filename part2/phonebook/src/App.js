import { useState } from 'react'

const PeopleList = ({ people, filter }) => {
  if (filter !== '') {
    people = people.filter(word =>
      word.name.toLowerCase().includes(filter.toLowerCase()))
  }
  return (
    <div className="">
      <h2>Numbers</h2>
      <div>
        {people.map(({ id, name, number }) => <p key={id}>Name: {name} {number}</p>)}
      </div>
    </div>
  )
}

const PhoneForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhoneNumber,
  setNewPhoneNumber
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      id: newName,
      name: newName,
      number: newPhoneNumber
    }
    if (persons.length === 0 || persons.every(p => p.name !== newPerson.name)) {
      setPersons([...persons, newPerson])
      setNewName('')
    } else {
      alert(`${newPerson.name} has already been added to the phonebook.`)
    }
  }
  return (
    <div>
      <h2>Add a new number:</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div className="">
          phoneNumber:
          <input
            value={newPhoneNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div className="">
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const FilterForm = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div>
      Filter shown with 
      <input 
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <FilterForm
        filter={filter}
        setFilter={setFilter} />
      <PhoneForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <PeopleList people={persons} filter={filter}/>
    </div>
  );
}

export default App;

import { useState } from 'react'

const PeopleList = ({ people }) => {
  return (
    <div className=" ">
      {people.map(person => <p key={person.id}>Name: {person.name} {person.number}</p>)}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

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
    <div className="App">
      <form onSubmit={addNewPerson}>
        <div className="">
          name: <input value={newName} onChange={handleNameChange}
          /></div>
        <div className="">
          phoneNumber: <input value={newPhoneNumber} onChange={handleNumberChange}
          />
        </div>
        <div className="">
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div className="debug">name: {newName} </div>
      <div className="debug">number: {newPhoneNumber} </div>
      <PeopleList people={persons} />

    </div>
  );
}

export default App;

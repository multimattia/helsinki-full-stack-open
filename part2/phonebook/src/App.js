import { useState } from 'react'

const PeopleList = ({ people }) => {
  return (
    <div className=" ">
      {people.map(person => <p key={person.id}>{person.name}</p>)}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([ ])
  const [newName, setNewName] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const addNewName = (event) => {
    event.preventDefault()
    console.log('persons:', persons)
    console.log('newName:', newName)
    const newPerson = {
      id: newName,
      name: newName,
      number: String(5183162704)
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
      <form onSubmit={addNewName}>
        <div className="">
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div className="">
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div className="debug">debug: {newName} </div>
      <PeopleList people={persons} />

    </div>
  );
}

export default App;

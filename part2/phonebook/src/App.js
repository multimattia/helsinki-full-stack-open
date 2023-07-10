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
    console.log('newName:', newName);
    const newPerson = {
      id: newName,
      name: newName,
      number: String(5183162704)
    }
    setPersons([...persons, newPerson])
    setNewName('')
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

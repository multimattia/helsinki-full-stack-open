import { useState } from 'react'

const Numbers = ({ name, numbers }) => {
  return (
    <div className=" ">
      
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  return (
    <div className="App">
      <form>
        <div className="">
          name: <input />
        </div>
        <div className="">
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <div className="debug">debug: {newName} </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }
    console.log('Button clicked', event.target);
    setNotes(notes.concat(noteObject))
    setNewNote('') // Clears the field.
  }
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }
  
  return (
    <div className="">
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
          )}
      </ul>

    <form onSubmit={addNote}>
          <input 
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
    </form>
    </div>
  )
}

export default App;
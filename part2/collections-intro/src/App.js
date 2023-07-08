import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
    </div>
  );
}

export default App;

const Note = ({ notes }) => (
  <div className="">
    <h1>Notes</h1>
    <ul>
      {notes.map(note => <li key={note.id}>{note.content}</li>)}
    </ul>
  </div>
)

const App = ({ notes }) => {
  return (
    <div className="App">
      <Note notes={notes} />
    </div>
  );
}

export default App;

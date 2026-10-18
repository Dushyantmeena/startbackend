import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([
    {
      title: 'title 1',
      description: 'This is my first note',
    },
    {
      title: 'title 2',
      description: 'This is my second note',
    },
    {
      title: 'title 3',
      description: 'This is my third note',
    },
    {
      title: 'title 4',
      description: 'This is my fourth note',
    },
  ]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log('Error fetching notes:', err.message);
      });
  }, []);

  return (
    <>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={note._id || index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
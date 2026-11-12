import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  function fatchNotes(){
     axios
      .get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes);
      })
       
  
  }

  useEffect(() => {
    fatchNotes()
    
  }, []);


  function handleSubmit(e){
     e.preventDefault()

     const {title,description} = e.target.elements

     console.log(title.value,description)

     axios.post("http://localhost:3000/api/notes",{
       title:title.value,
       description:description.value
     })

     .then(res=>{
      console.log(res.data)
      fatchNotes()

     })
    }

    function handleDeleteNote(noteId){
       axios.delete("http://localhost:3000/api/notes/"+noteId)
       .then(res=>{
        console.log(res.data)
        fatchNotes()
       })

    }

  return (
    <>

    <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type='text' placeholder='enter title'/> 
        <input name='description' type='text' placeholder='enter description' />
        <button>create note</button>
        

    </form>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={note._id || index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
              <button onClick={()=>{handleUpdateNote(note._id)}}>update</button>
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
import { useState } from "react";
import type { Note } from "../types";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const addNote = (title: string, body: string) => {
    const newNote = {
      id: Date.now(),
      completed: false,
      title,
      body,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id:number)=>{
    const updatedNotes= notes.filter((note)=> note.id !==id)
      setNotes(updatedNotes)
  }
  return (
    <div>
      <NoteForm onAdd={addNote} />
      <section>
      <NoteList notes={notes} onDelete={deleteNote}/>
      </section>
    </div>
  );
};

export default Home;

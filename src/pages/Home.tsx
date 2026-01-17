import { useState } from "react";
import type { Note } from "../types";
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
  return <div>
    
  </div>;
};

export default Home;

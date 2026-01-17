import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}
const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <li>{note.title} - {note.body}</li>
          <li></li>
          <button onClick={() => onDelete(note.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

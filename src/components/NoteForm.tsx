import { useState } from "react";

interface NoteFormProps {
  onAdd: (title: string, body: string) => void;
}
const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title, body);
    setTitle("");
    setBody("");
  };
  return (
    <div>
      Note Book
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo de nota"
          value={title}
          onChange={(evento) => setTitle(evento.target.value)}
        />
        <input
          type="text"
          placeholder="Texto de nota"
          value={body}
          onChange={(evento) => setBody(evento.target.value)}
        />
        <button type="submit"> agregar nota</button>
      </form>
    </div>
  );
};

export default NoteForm;

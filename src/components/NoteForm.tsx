import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

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
    <Container className="mt-4">
      <h2 className="mb-4">Notebook</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Título de nota"
            value={title}
            onChange={(evento) => setTitle(evento.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Texto de nota"
            value={body}
            onChange={(evento) => setBody(evento.target.value)}
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar nota
        </Button>
      </Form>
    </Container>
  );
};

export default NoteForm;
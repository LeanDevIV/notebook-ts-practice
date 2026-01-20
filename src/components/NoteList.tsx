import type { Note } from "../types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}
const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <Container className="mt-4">
      <Row className="g-3">
        {notes.map((note) => (
          <Col key={note.id} md={6} lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.body}</Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(note.id)}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NoteList;

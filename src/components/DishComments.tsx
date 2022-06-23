import ListGroup from "react-bootstrap/ListGroup";

interface DishComments {
  id: number;
  comments: Comment[];
}

const DishComments = ({ selectedDish }: DishComments) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
);

export default DishComments;

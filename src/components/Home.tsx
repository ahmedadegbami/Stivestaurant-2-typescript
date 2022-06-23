import { useState } from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import items from "../data/menu.json";
import DishComments from "./DishComments";

interface PastaObject {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: Date;
}

const Home = () => {
  const [selectedDish, setSelectedDish] = useState<PastaObject | undefined>(
    undefined
  );

  return (
    <Container>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Welcome to Strivestaurant!</h1>
          <p>We can serve only pasta</p>
          <Carousel className="mt-5">
            {items.map((pastaObject) => (
              <Carousel.Item key={pastaObject.id}>
                <img
                  className="d-block w-100"
                  src={pastaObject.image}
                  alt="First slide"
                  onClick={() => setSelectedDish(pastaObject)}
                />
                <Carousel.Caption>
                  <h3>{pastaObject.name}</h3>
                  <p>{pastaObject.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <DishComments selectedDish={selectedDish} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

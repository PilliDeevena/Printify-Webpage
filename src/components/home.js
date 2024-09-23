import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import myImage from './Screenshot 2024-09-23 222847.png'; 

const Home = () => {
  return (
    <Container className="homepage">
      <Row>
        <Col md={6} className="text-start">
          <h1>Create and sell custom products</h1>
          <ul>
          <ul>
  <li>&#10003; 100% Free to use</li>
  <li>&#10003; 900+ High-Quality Products</li>
  <li>&#10003; Largest global print network</li>
</ul>

          </ul>
          <Button variant="success" className="me-3">Start for free</Button>
          <Button variant="outline-secondary">How it works?</Button>
          <p className="mt-3 text-success">Trusted by over 8M sellers around the world</p>

        </Col>
        <Col md={6}>
  <img src={myImage} alt="T-shirt" className="img-fluid" />
  </Col>

      </Row>
    </Container>
  );
};

export default Home;

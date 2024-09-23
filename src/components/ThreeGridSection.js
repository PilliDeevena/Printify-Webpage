import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from './Screenshot 2024-09-23 230132.png';
import myImage1 from './Screenshot 2024-09-23 230322.png';
import myImage2 from './Screenshot 2024-09-23 230431.png';



const ThreeGridSection = () => {
  return (
    <Container>
      <Row className="three">
        <Col md={4} className="text-center">
          <img src={myImage} alt="Description 1" className="grid-image"  style={{padding:10}}/>
          <h3 style={{ color: '#32c770;' }}>Create</h3>
          <br></br> 
           <b><h4>custom products</h4></b>
          <p>Easily add your designs to a wide range of products using our free tools.</p>
        </Col>
        <Col md={4} className="text-center">
          <img src={myImage1} alt="Description 2" className="grid-image" />
          <h3 style={{ color: '#32c770;' }}>Sell</h3>
          <br></br> 
          <b><h4>on your terms</h4></b>
          <p>You choose the products, sale price, and where to sell.</p>
        </Col>
        <Col md={4} className="text-center">
          <img src={myImage2} alt="Description 3" className="grid-image" />
          <h3 style={{ color: '#32c770;' }} >We handle</h3>
          <br></br>
          <h3> fulfillment</h3>
          <p>Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeGridSection;

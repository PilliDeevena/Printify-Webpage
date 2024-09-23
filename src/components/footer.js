import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from './Screenshot 2024-09-23 224532.png'; 
import myImage2 from './Screenshot 2024-09-23 225011.png';
import myImage3 from './Screenshot 2024-09-23 225236.png';
const Footer = () => {
  return (
    <footer className="hello">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img src={myImage} alt="Description 1" className="footer-image" />
            <h5>Higher Profits</h5>
            <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src={myImage2} alt="Description 2" className="footer-image" />
            <h5>Robust Scaling</h5>
            <p>Easily handle peak holiday seasons with our wide network of partners and automatic routing functionality.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src={myImage3} alt="Description 3" className="footer-image" />
            <h5>Best Selection</h5>
            <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

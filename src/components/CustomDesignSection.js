// CustomDesignSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from './Screenshot 2024-09-23 225550.png';

const CustomDesignSection = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img src={myImage} alt="Design Example" className="design-image" />
        </Col>
        <Col md={6} className='custom'>
          <h5>Easily add your design to a wide range of products</h5>
          <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
          <a href="/products" className="all-products-text">
  All Products <span className="arrow-symbol">→</span>
</a>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomDesignSection;

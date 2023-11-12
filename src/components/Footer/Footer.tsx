import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container fluid className='bg-black ps-3 pt-1 position-absolute w-100 bottom-0'>
    <Row className='align-items-center'>
      <Col className='text-white text-center'>
        <span>{`\u00A9 ${new Date().getFullYear()} `}</span>
        <a href='https://github.com/rafagabidulin' className='text-white text-decoration-none'>
          Rafael Gabidulin
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;

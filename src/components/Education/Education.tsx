import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EducationItem from '../EducationItem/EducationItem';

const Education = ({ education }) => (
  <Container fluid className='d-flex p-3'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg={2}>
          <h1 className='text-center text-md-start'>Образование</h1>
        </Col>
      </Row>
      <Row className='mx-3'>
        {Object.values(education).map((item) => (
          <EducationItem higher={item} />
        ))}
      </Row>
    </Container>
  </Container>
);

export default Education;

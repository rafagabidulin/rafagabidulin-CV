import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Project = ({ name, description, link }) => {
  return (
    <Container className='p-3'>
      <Row className='mb-3'>
        <Col lg={5}>
          <h3 className='mb-3'>{name}</h3>
        </Col>
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </Row>
    </Container>
  );
};

export default Project;

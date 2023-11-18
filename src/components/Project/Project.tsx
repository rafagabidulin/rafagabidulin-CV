import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({ name, description, link }) => (
  <Container className='p-3'>
    <Row className='mb-3'>
      <Col lg={5}>
        <Link to={link} target='_new_blank' className='text-decoration-none'>
          <h3 className='mb-3'>{name}</h3>
        </Link>
      </Col>
    </Row>
    <Row>
      <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
    </Row>
  </Container>
);

export default Project;

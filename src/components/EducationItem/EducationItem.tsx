import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EducationItem = ({ higher }) => {
  console.log('Higher = ', higher);
  const { title, degrees, schools } = higher;
  console.log('Degrees = ', degrees);
  return (
    <Container className='p-3'>
      <Row className='mb-3'>
        <Col lg={5}>
          <h3 className='mb-3'>{title}</h3>
        </Col>
      </Row>
      <Row>
        <Row className='d-flex justify-content-center'>
          {degrees
            ? degrees?.map(({ university, faculty, specialization, graduated }) => (
                <Row key={university} className='mb-4'>
                  <Col
                    lg={4}
                    className='border-start border-end d-flex align-items-center mb-3 mb-lg-0'
                  >
                    <div>{university}</div>
                  </Col>
                  <Col lg={8} className='px-5'>
                    <p>{faculty}</p>
                    <p>{specialization}</p>
                    <i>{graduated}</i>
                  </Col>
                </Row>
              ))
            : schools?.map(({ school, courses }) => (
                <Row key={school} className='d-flex align-items-center mb-4'>
                  {courses.map(({ id, name, date, link }) => (
                    <Row key={id}>
                      <Col
                        lg={2}
                        className='border-start border-end d-flex align-items-center mb-3'
                      >
                        <div>{school}</div>
                      </Col>
                      <Col
                        lg={4}
                        className='border-start border-end d-flex align-items-center mb-3'
                      >
                        <Link to={link} target='_new_blank' className='text-decoration-none'>
                          {name}
                        </Link>
                      </Col>
                      <Col lg={6} className='px-5'>
                        <p>
                          <i>{date}</i>
                        </p>
                      </Col>
                    </Row>
                  ))}
                </Row>
              ))}
        </Row>
      </Row>
    </Container>
  );
};

export default EducationItem;

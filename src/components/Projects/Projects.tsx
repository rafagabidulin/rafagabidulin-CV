import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IProjects from '../../interfaces/IProjects';
import Project from '../Project/Project';

const Projects: FC<IProjects> = ({ projects }) => (
  <Container fluid className='p-3'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg={2}>
          <h1 className='text-center text-md-start'>Проекты</h1>
        </Col>
      </Row>
      <Row>
        {projects.map(({ name, description, link }) => (
          <Project key={name} name={name} description={description} link={link} />
        ))}
      </Row>
    </Container>
  </Container>
);

export default Projects;

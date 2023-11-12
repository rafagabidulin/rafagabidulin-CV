import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skill from '../Skill/Skill';
import ISkills from '../../interfaces/ISkills';

const Skills: FC<ISkills> = ({ skills }) => (
  <Container fluid className='d-flex p-3'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg={2}>
          <h1 className='text-center text-md-start'>Навыки</h1>
        </Col>
      </Row>
      <Row className='row-cols-auto justify-content-center pt-5'>
        {skills.map(({ id, logo, category }) => (
          <Skill key={id} id={id} category={category} logo={logo} title={id} />
        ))}
      </Row>
    </Container>
  </Container>
);

export default Skills;

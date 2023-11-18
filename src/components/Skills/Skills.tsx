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
      <Row className='row-cols-5 justify-content-center pt-3 mx-5'>
        {skills.map(({ id, logo, category, text }) => (
          <Skill key={id} id={id} category={category} logo={logo} title={id} text={text} />
        ))}
      </Row>
    </Container>
  </Container>
);

export default Skills;

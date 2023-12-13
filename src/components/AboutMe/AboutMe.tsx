import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Contacts from '../Contacts/Contacts';
import cv from '../../../public/assets/images/CV.jpg';

const AboutMe = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(1994, 10, 28);
  const age = today.getFullYear() - dob.getFullYear();

  const plural = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const declension = ['год', 'года', 'лет'];

  return (
    <Container fluid className='p-3 p-md-5'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col lg={4} xxl={3} className='mb-3'>
            <Image src={cv} alt='cv' width='88%' className='rounded' />
          </Col>
          <Col lg={4} xxl={5} className='px-4'>
            <Row className='d-flex flex-column align-items-center align-items-lg-stretch'>
              <Col>
                <h1 className='text-center text-md-start'>Рафаэль Габидулин</h1>
                <h4 className='mt-3'>Frontend-разработчик</h4>
              </Col>
              <Col className='mt-4'>
                <h4 className='mb-3'>Контакты:</h4>
                <Contacts />
              </Col>
              <Col className='mt-4'>
                <h4 className='mb-3'>Город: Москва</h4>
                <h4 className='mb-3'>
                  Возраст: {age} {plural(age, declension)}
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className='border mt-5' />
        <Row className='align-items-center flex-row-reverse px-5 mt-5'>
          <Col md={6} className='position-relative mb-4'>
            <img src='/assets/images/code-image.jpg' alt='Code' width='350px' />
          </Col>
          <Col md={6} className='mb-4'>
            <p>Я начинающий Frontend-разработчик.</p>
            <p>Проживаю в г. Москва.</p>
            <p>
              Переписываю проекты на TypeScript. Изучаю профессиональную литературу, статьи и
              документацию. Имею огромное желание расти и развиваться во Frontend-разработке.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutMe;

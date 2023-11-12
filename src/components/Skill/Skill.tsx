import React, { FC, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Col } from 'react-bootstrap';
import ISkill from '../../interfaces/ISkill';

const Skill: FC<ISkill> = ({ title, logo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <Col className='border-0 d-flex'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card className='border-0 d-flex' onClick={handleFlip} onMouseLeave={handleFlip}>
          <Card.Body>
            <img src={`/assets/logos/${logo}`} alt='' height={120} width={120} />
          </Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card>
        <Card className='border-0 d-flex' onClick={handleFlip} onMouseEnter={handleFlip}>
          <Card.Body>asefsef</Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card>
      </ReactCardFlip>
    </Col>
  );
};

export default Skill;

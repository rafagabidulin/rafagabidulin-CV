import React, { FC, useState, useEffect, useCallback } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Col } from 'react-bootstrap';
import ISkill from '../../interfaces/ISkill';

const Skill: FC<ISkill> = ({ title, logo, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped((prev) => !prev);

  const handleMouseEnter = useCallback(() => {
    setIsFlipped(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsFlipped(false);
  }, []);

  return (
    <Col className='border-0 d-flex'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card className='border-0' onClick={handleClick} onMouseEnter={handleMouseEnter}>
          <Card.Body>
            <img src={`/assets/logos/${logo}`} alt='' height={120} width={120} />
          </Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card>
        <Card className='border-0' onClick={handleClick} onMouseLeave={handleMouseLeave}>
          <Card.Body>{text}</Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card>
      </ReactCardFlip>
    </Col>
  );
};

export default Skill;

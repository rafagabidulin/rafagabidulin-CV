import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar variant='dark' className='bg-dark'>
    <Container className='d-flex align-items-center h-100'>
      <div className='w-25 '>
        <Navbar.Brand>RafaGabidulin</Navbar.Brand>
      </div>
      <div>
        <Button variant='primary'>Light</Button>
        <Button variant='primary'>en</Button>
      </div>
    </Container>
  </Navbar>
);

export default Header;

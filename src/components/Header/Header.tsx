import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar variant='dark' className='bg-black col-12 py-3'>
    <Container className='d-flex align-items-center h-100'>
      <div>
        <NavLink to='/' className='text-decoration-none'>
          <Navbar.Brand>RafaGabidulin</Navbar.Brand>
        </NavLink>
      </div>
      <div>
        <Button variant='primary'>Light</Button>
        <Button variant='primary'>en</Button>
      </div>
    </Container>
  </Navbar>
);

export default Header;

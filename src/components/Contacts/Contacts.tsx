import React from 'react';
import { Col } from 'react-bootstrap';
import contacts from '../../data/contacts';

const Contacts = () => (
  <div className='d-flex flex-row'>
    {contacts.map(({ name, link, icon }) => (
      <div className='mt-2'>
        <a target='_blank' className='link-dark me-4' href={link} rel='noreferrer'>
          {icon}
        </a>
      </div>
    ))}
  </div>
);

export default Contacts;

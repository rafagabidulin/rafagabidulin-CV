import React from 'react';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaPhone } from 'react-icons/fa';
import IContacts from '../interfaces/IContacts';

const author: IContacts[] = [
  {
    name: 'github',
    link: 'https://github.com/rafagabidulin',
    icon: <FaGithub size={30} />
  },
  {
    name: 'telegram',
    link: 'https://t.me/rafagabidulin',
    icon: <FaTelegramPlane size={30} />
  },
  {
    name: 'phone',
    link: 'tel:+7937079077',
    icon: <FaPhone size={30} />
  },
  {
    name: 'email',
    link: 'mailto:rafagabidulin@gmail.com',
    icon: <FaEnvelope size={30} />
  }
];

export default author;

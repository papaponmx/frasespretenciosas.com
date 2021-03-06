import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Acerca de</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/papaponmx/">@papaponmx</a>
      </li>
    </ul>
  </Container>
);

export default Nav;

import React from 'react';
import { Container } from '../common/Container';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #10455b;
    font-size: 1.1rem;
    padding: 0.5rem 0.7rem;
    font-weight: 100;
  }
  a:hover {
    transform: scale(1.125);
    transition: ease-in-out;
  }
`;

const Navbar = () => (
  <Wrapper as={Container}>
    <a href="/">Vermont Apartment Data</a>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;

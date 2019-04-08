import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  a {
    text-decoration: none;
    font-weight: 100;
  }
  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}
			a {
					margin-right: 1rem;
					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;
			a {
					margin-bottom: 1rem;
					&:last-child {
							margin-bottom: unset;
					}
			}
	`};
`;

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#footer">Contact</a>
  </Wrapper>
);

export default NavbarLinks;

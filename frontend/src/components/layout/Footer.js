import React from 'react';
import { Container } from '../common/Container';
import social from './Social';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

const Flex = styled.div`
  border-top: 4px solid #2aa1af;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;
    color: #2aa1af;
    font-size: 1.2rem;
    img {
      margin: 0.125rem;
    }
    &:first-child,
    &:last-child {
      margin: 0.125rem;
    }
  }
`;

const Details = styled.div`
  color: #10455b;
  margin-top: 2rem;
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  span {
    color: #fa8072;
    font-size: 1.4rem;
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container} id="footer" rel="canonical">
      <Details>
        <h2>Vermont Apartment Data</h2>
        <div>
          <span>
            © {new Date().getFullYear()} | Made with{' '}
            <span aria-label="love" role="img">
              🙏
            </span>{' '}
            by{' '}
            <a
              href="https://github.com/mattysmith9"
              rel="noopener noreferrer"
              target="_blank"
            >
              Matty Smith
            </a>
          </span>
        </div>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${icon}`}
          >
            <img width="42" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

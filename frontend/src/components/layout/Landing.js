import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

const IntroWrapper = styled.div`
  padding: 4rem 0;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -12px;
    margin-bottom: 2rem;
    font-size: 120pt;
    text-align: center;
    font-weight: normal;
    color: #10455b;
    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }
  h5 {
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 14pt;
    font-weight: normal;
    color: #2aa1af;
    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Landing = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <Card />
      </Details>
    </IntroWrapper>
    <Footer />
  </Wrapper>
);

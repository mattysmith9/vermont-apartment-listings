import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.3rem 0.6rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #e2f0f1;
  background: #10455b;
  &:focus {
    outline: #ffffff;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`};
`;

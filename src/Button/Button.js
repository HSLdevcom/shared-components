import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: ${props => props.inverted ? 'white': '#007ac9'};
  height: 2.5rem;
  padding: 0px 20px;
  color: ${props => props.inverted ? '#007ac9': 'white' };
  font-size: ${props => props.fontSize ? props.fontSize: '1rem'};
  border-radius:30px;
  border: ${props => props.inverted ? '#007ac9 solid 2px': 'none'};
  min-width: 200px;
`;

// const Button = (props) => {
//   console.log(StyledButton);
//   return (<StyledButton>{props.text}</StyledButton>);
// }

export default StyledButton;

import React from 'react';
import styled from 'styled-components';


const Button = styled.button `
  background-color: ${props => props.primary ? props.theme.primary : props.theme.secondary};
  height: 2.5rem;
  padding: 0px 20px;
  color: ${props => props.primary ? props.theme.secondary : props.theme.primary};
  font-size: ${props => props.fontSize ? props.fontSize: '1rem'};
  border-radius:30px;
  border-color: ${props => props.theme.primary};
  border-style: solid;
  min-width: 200px;
`;

export default Button;

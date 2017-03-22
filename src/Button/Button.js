import styled from 'styled-components';


const Button = styled.button`
  height: auto;
  border-radius: 2em;
  border-color: ${props => props.theme.primary};
  border-style: solid;
  background-color: ${props => (props.primary ? props.theme.primary : 'transparent')};
  color: ${props => (props.primary ? props.theme.secondary : props.theme.primary)};
  padding: 0.7em 1.6em;
  font-size: 1.1em;
  letter-spacing: -0.4pt;
  width: 90%;
  display: block;
  margin: auto;
  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;
`;

export default Button;

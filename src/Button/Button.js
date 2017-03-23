import styled from 'styled-components';


const Button = styled.button`
  height: auto;
  border-radius: 2em;
  border-color: ${props => (props.primary ? props.theme.primary : props.theme.secondary)};
  border-style: solid;
  border-width: 1px;
  background-color: ${props => (props.primary ? props.theme.primary : 'transparent')};
  color: ${props => (props.primary ? '#fff' : props.theme.secondary)};
  padding: 0.7em 1.6em;
  font-size: 1.1em;
  letter-spacing: -0.4pt;
  width: 90%;
  display: block;
  margin: auto;
  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;
`;

export default Button;

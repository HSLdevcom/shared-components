import styled from 'styled-components';


const Button = styled.button`
  height: 40pt;
  border-radius: 20pt;
  border-color: ${props => props.theme.primary};
  border-style: solid;
  background-color: ${props => (props.primary ? props.theme.primary : props.theme.secondary)};
  color: ${props => (props.primary ? props.theme.secondary : props.theme.primary)};
  font-size: 15pt;
  letter-spacing: -0.4pt;
  width: 90%;
  display: block;
  margin: auto;
  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;
`;

export default Button;

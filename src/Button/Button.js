import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';

const Button = styled.button`
  height: auto;
  border-radius: ${props => (props.rounded ? '2em' : '4px')};
  border-style: solid;
  border-width: 1px;
  padding: 0.7em 1.6em;
  font-size: 1.1em;
  letter-spacing: -0.4pt;
  width: 90%;
  display: block;
  margin: auto;
  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;

  border-color: ${props => props.theme.default};
  background-color: #fff;
  color: ${props => props.theme.primary};
  &:hover {
    cursor: pointer;
    border-color: ${props => props.theme.primary};
  }
  ${props => props.primary && `
    border-color: ${props.theme.primary};
    background-color: ${props.theme.primary};
    color: ${props.theme.primaryText};
    &:hover {
      border-color: ${darken(0.1, props.theme.primary || '#007ac9')};
      background-color: ${darken(0.1, props.theme.primary || '#007ac9')};
    }
  `}
  ${props => props.secondary && `
    border-color: ${darken(0.2, props.theme.default || '#b7b7b7')};
    color: ${darken(0.2, props.theme.default || '#b7b7b7')};
    &:hover {
      border-color: ${props.theme.primary};
    }
  `}
  ${props => props.disabled && `
    color: ${props.theme.default};
    border-color: ${props.theme.default};
    &:hover {
      border-color: ${props.theme.default};
    }
  `}

  ${props => props.disabled && props.primary && `
    background-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};
    border-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};;
    &:hover {
      background-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};;
      border-color: ${lighten(0.175, props.theme.default || '#b7b7b7')};;
    }
  `}
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string
};

export default Button;

const ButtonNoStyle = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  line-height: 0;
  width: auto;
  height: auto;
  background: inherit;
  color: inherit;
  font: inherit;
`;

export { ButtonNoStyle };

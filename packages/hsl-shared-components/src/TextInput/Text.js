import styled from 'styled-components';
import { lighten } from 'polished';
import { size } from '../utils';

const Input = styled.input `
  font-size: ${size(18)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily.replace(/"/g, '')};`}
  color: ${props => props.theme.secondary};

  padding: ${size(12)} ${size(16)};
  border-radius: ${size(4)};
  border: solid 1px ${props => lighten(0.185, props.theme.secondary)};
  outline: 0;
  transition: border-color 0.5s, color 0.5s;
  &:focus {
    color: ${props => props.theme.colors.primary.hslGreyDark};
    border-color: ${props => props.theme.colors.primary.hslBlue};
  }
  ${props => props.focus && `
    color: ${props.theme.colors.primary.hslGreyDark};
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
  ${props => props.error && `
    color: ${props.theme.error.color.primary};
    border-color: ${props.theme.error.color.primary};
    background-color: ${props.theme.error.color.secondary};
  `}
  &:focus {
    ${props => props.error && `
      color: ${props.theme.error.color.primary};
      border-color: ${props.theme.error.color.primary};
      background-color: ${props.theme.error.color.secondary};
    `}
  }
`;

export default Input;

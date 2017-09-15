import styled from 'styled-components';
import { lighten } from 'polished';
import { size } from '../utils';

const Input = styled.input `
  font-size: ${size(18)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
  color: ${props => props.theme.secondary};

  padding: ${size(14)} ${size(18)};
  border-radius: ${size(4)};
  border: solid 1px ${props => lighten(0.185, props.theme.secondary)};
  outline: 0;
  transition: border-color 0.5s, color 0.5s;
  &:focus {
    color: ${props => props.theme.colors.primary.hslGreyDark};
    border-color: ${props => props.theme.primary};
  }
  ${props => props.focus && `
    color: ${props.theme.colors.primary.hslGreyDark};
    border-color: ${props.theme.primary};
  `}
  ${props => props.error && `
    color: ${props.theme.colors.misc.error};
    border-color: ${props.theme.colors.misc.error};
    background-color: ${props.theme.colors.misc.errorBackground};
  `}
  &:focus {
    ${props => props.error && `
      color: ${props.theme.colors.misc.error};
      border-color: ${props.theme.colors.misc.error};
      background-color: ${props.theme.colors.misc.errorBackground};
    `}
  }
`;

export default Input;

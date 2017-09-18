import styled from 'styled-components/native';
import { lighten } from 'polished';
import { size } from '../utils';

const TextInput = styled.TextInput`
  font-size: ${size(18)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
  color: ${props => props.theme.secondary};
  padding: ${size(14)} ${size(18)};
  border-radius: ${size(4)};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => lighten(0.185, props.theme.secondary)};
  ${props => props.focus && `
    color: ${props.theme.colors.hslGreyDark};
    border-color: ${props.theme.primary};
  `}
  ${props => props.error && `
    color: ${props.theme.error};
    border-color: ${props.theme.error};
    background-color: ${props.theme.errorBackground};
  `}
`;

TextInput.defaultProps = {
  underlineColorAndroid: 'transparent'
};

export default TextInput;

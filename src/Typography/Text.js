import styled from 'styled-components/primitives';
import { size } from '../utils';

const Text = styled.Text`
  font-size: ${size(16)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
  color: #333333;
`;

export default Text;


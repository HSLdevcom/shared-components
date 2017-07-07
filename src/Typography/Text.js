import styled from 'styled-components/primitives';

const Text = styled.Text`
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
  color: #333333;
`;

export default Text;


import styled from 'styled-components/primitives';

const Text = styled.Text`
  font-family: ${props => props.theme.fontFamily || 'initial'};
  color: #333333;
`;

export default Text;


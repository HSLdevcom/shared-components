import styled from 'styled-components';

const Text = styled.span`
  color: ${props => (props.color)};
  display: ${props => (props.display)};
`;

export default Text;

import styled from 'styled-components';

const Span = styled.span`
  color: ${props => (props.color || props.theme.defaultTextColor || '#000000')};
  display: ${props => (props.display || 'inline')};
`;

export default Span;

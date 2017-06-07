import styled from 'styled-components';

const LangButton = styled.button`
  border-radius: 3px;
  border: 0;
  outline: 0;
  background: 0;
  padding: 0 0.5rem;
  color: inherit;
  font: inherit;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;
export default LangButton;

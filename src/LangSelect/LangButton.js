import styled from 'styled-components';

const LangButton = styled.button`
  border-radius: 3px;
  border: 0;
  outline: 0;
  background: 0;
  width: 2rem;
  height: 1.5rem;
  padding: 0;
  color: inherit;
  font: inherit;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;
export default LangButton;

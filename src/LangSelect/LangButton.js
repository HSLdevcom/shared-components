import { ButtonNoStyle } from '../Button/Button';

const LangButton = ButtonNoStyle.extend`
  border-radius: 3px;
  width: 2rem;
  height: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;
export default LangButton;

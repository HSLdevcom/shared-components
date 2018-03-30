import View from '../View';

const DropdownElement = View.extend`
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-width: 1px;
  border-radius: 4px;
  align-items: stretch;
`;

export default DropdownElement;

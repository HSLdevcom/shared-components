import Div from '../Div';

const Separator = Div.extend`
  height: 1px;
  background: ${props => props.theme.background};
  margin-top: 10px;
`;

const HorizontalSeparator = Separator.extend`
  height: auto;
  width: 1px;
  margin: 0;
`;

const MenuSeparator = Separator.extend`
  background: ${props => props.theme.menuBorder};
  margin: 1rem 0;
`;

const HorizontalMenuSeparator = HorizontalSeparator.extend`
  background: ${props => props.theme.menuBorder};
`;

export { MenuSeparator, HorizontalSeparator, HorizontalMenuSeparator };
export default Separator;

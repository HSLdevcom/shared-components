import Div from '../Div';

const AppHeader = Div.extend `
  background-color: ${props => props.theme.colors.background.hslGreyDark};
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.colors.primary.hslWhite};
`;

export default AppHeader;

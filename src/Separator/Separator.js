import styled from 'styled-components';

const Separator = styled.div `
  height: 2px;
  background: ${props => props.theme.background};
  margin-top: 10px;
`;

const MenuSeparator = Separator.extend`
  border-bottom: solid 1px ${props => props.theme.menuBorder};
  margin: 0.75em 0;
`;
export { MenuSeparator };
export default Separator;

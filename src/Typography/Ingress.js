import Text from './Text';

const Ingress = Text.extend`
  font-size: 20px;
  line-height: 25;
  font-weight: 300;
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

export default Ingress;

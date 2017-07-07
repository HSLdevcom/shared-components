import Text from './Text';

const Ingress = Text.extend`
  font-size: 20px;
  line-height: 25;
  font-weight: 300;
  font-family: ${props => props.theme.fontFamilyNarrow || 'initial'};
`;

export default Ingress;

import Text from './Text';
import { size } from '../utils';

const Ingress = Text.extend`
  font-size: ${size(20)};
  line-height: 25;
  font-weight: 300;
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

export default Ingress;

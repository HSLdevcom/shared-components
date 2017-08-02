import Text from './Text';
import { size } from '../utils';

const H2 = Text.extend`
  font-size: ${size(36)};
  font-weight: 500;
  letter-spacing: -0.4px;
`;

export default H2;


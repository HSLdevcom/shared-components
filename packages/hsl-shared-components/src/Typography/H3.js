import Text from './Text';
import { size } from '../utils';

const H3 = Text.extend`
  font-size: ${size(24)};
  font-weight: 500;
  letter-spacing: -0.4px;
`;

export default H3;


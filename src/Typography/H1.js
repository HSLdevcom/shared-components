import Text from './Text';
import { size } from '../utils';

const H1 = Text.extend`
  font-size: ${size(48)};
  font-weight: 500;
  letter-spacing: -0.4px;
`;

export default H1;


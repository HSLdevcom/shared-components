import Text from './Text';
import { relativeLineHeight } from '../utils';

const P = Text.extend`
  font-weight: 300;
  line-height: ${relativeLineHeight(16, 1.25)};
`;

export default P;

import Text from './Text';
import { size } from '../utils';

const Caption = Text.extend`
  font-weight: 300;
  font-size: ${size(13)};
  line-height: 14;
`;

export default Caption;

import Text from './Text';
import { size, relativeLineHeight } from '../utils';

const Caption = Text.extend`
  font-weight: 300;
  font-size: ${size(13)};
  line-height: ${relativeLineHeight(13, 1.08)};
`;

Caption.displayName = 'Caption';

export default Caption;

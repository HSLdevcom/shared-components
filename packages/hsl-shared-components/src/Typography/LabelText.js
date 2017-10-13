import Text from './Text';
import { size } from '../utils';

const LabelText = Text.extend`
  font-size: ${size(18)};
  line-height: ${18};
`;

LabelText.displayName = 'LabelText';

export default LabelText;

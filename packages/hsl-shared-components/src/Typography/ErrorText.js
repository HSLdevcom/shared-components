import Text from './Text';
import { size } from '../utils';

const ErrorText = Text.extend`
  font-weight: 300;
  color: #dc0451;
  font-size: ${size(16)};
  line-height: ${16};
`;

export default ErrorText;

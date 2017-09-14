import Text from './Text';
import { size } from '../utils';

const ErrorText = Text.extend`
  font-weight: 300;
  color: ${props => props.theme.colors.secondary.hslMagenta};
  font-size: ${size(16)};
  line-height: ${16};
`;

export default ErrorText;

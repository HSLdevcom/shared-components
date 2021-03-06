import PropTypes from 'prop-types';
import Text from './Text';
import { IS_NATIVE, size, relativeLineHeight } from '../utils';

const ErrorText = Text.extend`
${props => !props.small && `
  font-size: ${size(16)}
  line-height: ${relativeLineHeight(16, 1.00)};
`}
${props => (props.small || IS_NATIVE) && `
  font-size: ${size(14)}
  line-height: ${relativeLineHeight(14, 1.14)};
`}
  font-weight: 300;
  color: ${props => props.theme.colors.secondary.hslMagenta};
`;

ErrorText.propTypes = {
  small: PropTypes.bool
};

ErrorText.displayName = 'ErrorText';

export default ErrorText;

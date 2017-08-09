import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const ErrorText = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  color: #dc0451;
  font-size: ${props => utilsSize(16 * (props.size || 1))};
  line-height: ${props => 16 * (props.size || 1)};
`;

ErrorText.propTypes = {
  size: PropTypes.number
};

export default ErrorText;

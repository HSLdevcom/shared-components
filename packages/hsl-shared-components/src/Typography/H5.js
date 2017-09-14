import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size } from '../utils';

const H5 = styled(({ children, ...rest }) => (
  <Text accessibilityRole="heading" aria-level="5" {...rest}>{children.toUpperCase()}</Text>
))`
  font-weight: 500;
  font-size: ${size(16)};
`;

H5.propTypes = {
  children: PropTypes.string
};

export default H5;

import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const H5 = styled(({ size, children, ...rest }) => (
  <Text {...rest}>{children.toUpperCase()}</Text>
))`
  font-weight: 500;
  font-size: ${props => utilsSize(16 * (props.size || 1))};
`;

H5.propTypes = {
  size: PropTypes.number,
  children: PropTypes.string
};

export default H5;

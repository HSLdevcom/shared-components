import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const H2 = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${props => utilsSize(36 * (props.size || 1))};
`;

H2.propTypes = {
  size: PropTypes.number
};

export default H2;

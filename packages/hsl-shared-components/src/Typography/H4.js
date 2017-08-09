import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const H4 = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 500;
  font-size: ${props => utilsSize(21 * (props.size || 1))};
`;

H4.propTypes = {
  size: PropTypes.number
};

export default H4;

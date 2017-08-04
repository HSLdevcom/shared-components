import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const P = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(14 * (props.size || 1))};
  line-height: ${props => 18 * (props.size || 1)};
`;

P.propTypes = {
  size: PropTypes.number
};

export default P;

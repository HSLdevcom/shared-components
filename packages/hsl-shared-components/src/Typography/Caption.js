import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const Caption = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(13 * (props.size || 1))};
  line-height: ${props => 14 * (props.size || 1)};
`;

Caption.propTypes = {
  size: PropTypes.number
};

export default Caption;

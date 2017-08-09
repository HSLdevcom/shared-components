import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const InfoText = styled(({ size, large, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(16 * (props.size || 1))};
  line-height: ${props => 16 * (props.size || 1)};
  color: #8c4799;
  ${props => props.large && `
    font-weight: 500;
    font-size: ${utilsSize(18 * (props.size || 1))};
    color: #ff5200;
  `}
`;

InfoText.propTypes = {
  size: PropTypes.number,
  large: PropTypes.bool
};

export default InfoText;

import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size } from '../utils';

const InfoText = styled(({ large, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${size(16)};
  line-height: ${16};
  color: #8c4799;
  ${props => props.large && `
    font-weight: 500;
    font-size: ${size(18)};
    color: #ff5200;
  `}
`;

InfoText.propTypes = {
  size: PropTypes.number,
  large: PropTypes.bool
};

export default InfoText;

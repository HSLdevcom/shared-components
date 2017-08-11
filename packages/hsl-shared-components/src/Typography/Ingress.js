import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size as utilsSize } from '../utils';

const Ingress = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(20 * (props.size || 1))};
  line-height: ${props => Math.round(25 * (props.size || 1))};
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

Ingress.propTypes = {
  size: PropTypes.number
};

export default Ingress;

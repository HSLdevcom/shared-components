import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const H3 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="3" {...props} />
))`
  color: ${props => props.theme.colors.primary.hslGreyDark};
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(24)};
`;

export default H3;

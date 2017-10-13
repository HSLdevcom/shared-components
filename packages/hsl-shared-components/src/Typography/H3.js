import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const H3 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="3" {...props} />
))`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(24)};
`;

H3.displayName = 'H3';

export default H3;

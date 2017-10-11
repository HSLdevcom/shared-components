import React from 'react';
import styled from 'styled-brimitives';

import Text from './Text';
import { size } from '../utils';

const H2 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="2" {...props} />
))`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(36)};
`;

export default H2;

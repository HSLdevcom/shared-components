import React from 'react';
import styled from 'styled-brimitives';

import Text from './Text';
import { size } from '../utils';

const H1 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="1" {...props} />
))`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(48)};
`;

export default H1;

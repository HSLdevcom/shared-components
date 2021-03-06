import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const H1 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="1" {...props} />
))`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(48)};
`;

H1.displayName = 'H1';

export default H1;

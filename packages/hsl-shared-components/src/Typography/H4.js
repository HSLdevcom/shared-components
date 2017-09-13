import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const H4 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="4" {...props} />
))`
  font-weight: 500;
  font-size: ${size(21)};
`;

export default H4;

import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const H1 = styled(({ ...props }) => (
  <Text accessibilityRole="heading" aria-level="1" {...props} />
))`
  color: ${props => props.theme.colors.primary.hslGreyDark};
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: ${size(48)};
`;

export default H1;

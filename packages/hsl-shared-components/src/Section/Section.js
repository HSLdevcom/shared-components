import React from 'react';
import styled from 'styled-components/primitives';

import View from '../View';

const Section = styled(({ ...props }) => (
  <View accessibilityRole="region" {...props} />
))``;

export default Section;

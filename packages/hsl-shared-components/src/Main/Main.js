import React from 'react';
import styled from 'styled-brimitives';

import View from '../View';

const Main = styled(({ ...props }) => (
  <View accessibilityRole="main" {...props} />
))``;

export default Main;

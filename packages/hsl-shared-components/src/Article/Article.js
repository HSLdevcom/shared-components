import React from 'react';
import styled from 'styled-brimitives';

import View from '../View';

const Article = styled(({ ...props }) => (
  <View accessibilityRole="article" {...props} />
))``;

export default Article;

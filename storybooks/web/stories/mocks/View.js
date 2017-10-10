import React from 'react';
import styled from 'styled-components/primitives';

const View = styled.View``;

const StyledView = styled(({ onLayout, ...rest }) => (
  <View
    {...rest}
  />
))``;

export default StyledView;

import React from 'react';
import styled from 'styled-components';

const Div = styled.div``;

const StyledDiv = styled(({ onLayout, style, ...rest }) => (
  <Div
    {...rest}
  />
))``;

export default StyledDiv;

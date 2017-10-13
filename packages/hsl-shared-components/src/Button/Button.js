import React from 'react';
import styled from 'styled-components';
import ButtonNative from './ButtonNative';
import { getBorderColor, getBackgroundColor } from './utils';

const Button = styled(props =>
  <ButtonNative {...props} />
)`
  &:hover,
  &:active {
    border-color:  ${props => getBorderColor(props, { hover: true })};
    background-color: ${props => getBackgroundColor(props, { hover: true })};
  }
`;

Button.propTypes = {
  ...ButtonNative.propTypes,
};

Button.displayName = 'Button';

export default Button;

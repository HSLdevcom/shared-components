import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { View as ViewPrimitives } from 'react-primitives';
import View from '../View';

const TouchableWeb = styled(({
  onClick,
  onPress,
  onLongPress,
  pressedStyle,
  accessibilityRole,
  disabled,
  ...rest,
}) =>
  <View
    onClick={onClick || onPress}
    disabled={disabled}
    accessibilityRole={accessibilityRole || 'button'}
    {...rest}
  />
)`
  cursor: pointer;
  ${props => props.disabled && 'cursor: not-allowed;'}
`;

TouchableWeb.propTypes = {
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  pressedStyle: PropTypes.shape(ViewPrimitives.propTypes.style),
  accessibilityRole: PropTypes.string,
  disabled: PropTypes.boolean,
};

TouchableWeb.displayName = 'Touchable';

export default TouchableWeb;

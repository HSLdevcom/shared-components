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
  ...rest,
}) =>
  <View
    onClick={onClick || onPress}
    accessibilityRole={accessibilityRole || 'button'}
    {...rest}
  />
)``;

TouchableWeb.propTypes = {
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  pressedStyle: PropTypes.shape(ViewPrimitives.propTypes.style),
  accessibilityRole: PropTypes.string,
};

TouchableWeb.displayName = 'Touchable';

export default TouchableWeb;

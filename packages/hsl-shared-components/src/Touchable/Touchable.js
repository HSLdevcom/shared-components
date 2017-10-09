import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';

const TouchableWeb = styled(({
  onClick,
  onPress,
  accessibilityRole,
  ...rest,
}) =>
  <View
    onCLick={onClick || onPress}
    accessibilityRole={accessibilityRole || 'button'}
    {...rest}
  />
)``;

TouchableWeb.propTypes = {
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  activeStyle: View.propTypes.style,
  accessibilityRole: PropTypes.string,
};

TouchableWeb.displayName = 'Touchable';

export default TouchableWeb;

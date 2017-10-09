import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const TouchableNative = ({
  onPress,
  onLongPress,
  ...rest
}) =>
  (<TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    {...rest}
  />);

TouchableNative.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

TouchableNative.displayName = 'Touchable';

export default TouchableNative;

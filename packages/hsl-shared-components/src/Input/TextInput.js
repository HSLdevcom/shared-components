import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
/*
* https://facebook.github.io/react-native/docs/textinput.html
*/
const TextInput = ({ keyboardType, ...rest }) => (
  ({
    default: <Text {...rest} />
  })[keyboardType || 'default']
);

TextInput.propTypes = {
  keyboardType: PropTypes.string
};

export default TextInput;

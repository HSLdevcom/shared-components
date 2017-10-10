import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import View from '../View';

class TouchableNative extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  handlePressIn() {
    this.setState({
      pressed: true,
    });
  }

  handlePressOut() {
    this.setState({
      pressed: false,
    });
  }

  render() {
    const {
      onPress,
      onLongPress,
      pressed,
      style,
      pressedStyle,
      ...rest
    } = this.props;

    const currentStyle = !this.state.pressed ? style : [
      style,
      pressedStyle,
    ];

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <View
          pressed={this.state.pressed === true ? this.state.pressed : pressed}
          style={currentStyle}
          {...rest}
        />
      </TouchableWithoutFeedback>
    );
  }
}

TouchableNative.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  pressed: PropTypes.bool,
  style: PropTypes.any,
  pressedStyle: PropTypes.any,
  accessibilityRole: PropTypes.string,
};

TouchableNative.displayName = 'Touchable';

export default TouchableNative;

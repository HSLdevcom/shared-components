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
      style,
      activeStyle,
      ...rest
    } = this.props;

    const currentStyle = !this.state.pressed ? style : [
      style,
      activeStyle,
    ];

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}

      >
        <View
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
  style: View.propTypes.style,
  activeStyle: View.propTypes.style,
  accessibilityRole: PropTypes.string,
};

TouchableNative.displayName = 'Touchable';

export default TouchableNative;

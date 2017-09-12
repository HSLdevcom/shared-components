import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-sketchapp';
import { Button } from 'hsl-shared-components';

const buttonLayoutStyles = {
  margin: 20,
};

const Buttons = () => {
  return (
    <View name="Buttons" style={{ flexDirection: 'row' }}>
      <Button
        name="Primary Button"
        disabled={false}
        small={false}
        large={false}
        primary
        onPress={() => false}
        onLongPress={() => false}
        style={buttonLayoutStyles}
      >
        Primary Button
      </Button>
      <Button
        name="Primary Button"
        disabled={true}
        small={false}
        large={false}
        primary
        onPress={() => false}
        onLongPress={() => false}
        style={buttonLayoutStyles}
      >
        Primary Button
      </Button>
    </View>
  );
};

Buttons.propTypes = {

};

export default Buttons

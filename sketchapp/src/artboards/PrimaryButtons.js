import React from 'react';
import { View } from 'react-sketchapp';
import { Button } from 'hsl-shared-components';

const buttonLayoutStyles = {
  marginTop: 20,
  marginBottom: 20,
};

const PrimaryButtons = () =>
  (
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
        Button default
      </Button>
      <Button
        name="Primary Button Disabled"
        disabled
        small={false}
        large={false}
        primary
        onPress={() => false}
        onLongPress={() => false}
        style={buttonLayoutStyles}
      >
        Button default
      </Button>
    </View>
  );

export default PrimaryButtons;

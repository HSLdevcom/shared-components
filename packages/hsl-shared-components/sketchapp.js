import React from 'react';
import { render, Artboard, View } from 'react-sketchapp';
import { ThemeProvider } from 'styled-components';
import Theme from './src/themes/themes.hsl';
// import { Text } from 'react-primitives'
// import { typography, spacing } from './designSystem'
import Button from './src/Button/Button';
import RoundButton from './src/Button/RoundButton';

const Document = () => (
  <ThemeProvider theme={Theme}>
    <Artboard
      name="Buttons"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (96 + 8) * 4,
        padding: 20,
      }}
    >
      <View name="Default Button">
        <Button
          disabled={false}
          rounded={false}
          small={false}
          large={false}
          onPress={() => false}
          onLongPress={() => false}
        >
          Default Button
        </Button>
      </View>
      <View name="Primary Button">
        <Button
          disabled={false}
          small={false}
          large={false}
          primary
          onPress={() => false}
          onLongPress={() => false}
        >
          Primary Button
        </Button>
      </View>
      <View name="Secondary Button">
        <Button
          disabled={false}
          small={false}
          large={false}
          secondary
          onPress={() => false}
          onLongPress={() => false}
        >
          Secondary Button
        </Button>
      </View>
      <View name="Round Button">
        <RoundButton
          small={false}
          large={false}
        />
      </View>
    </Artboard>
  </ThemeProvider>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};

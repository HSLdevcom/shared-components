import React from 'react';
import { StyleSheet, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';

import Theme from './themes/themes.hsl';
import StorybookUI from './storybook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <ThemeProvider theme={Theme}>
    <View style={styles.container}>
      <StorybookUI />
    </View>
  </ThemeProvider>
);

export default App;

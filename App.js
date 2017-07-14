import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import { ThemeProvider } from 'styled-components';

import Theme from './themes/themes.hsl';
import StorybookUI from './storybook';

const font = require('./static/Digitalt.ttf');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    this.loadFont();
  }

  async loadFont() {
    await Font.loadAsync({
      'Gotham Rounded SSm A, Gotham Rounded SSm B': font,
      'Gotham XNarrow SSm A, Gotham XNarrow SSm B': font,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    return (
      <ThemeProvider theme={Theme}>
        <View style={styles.container}>
          { this.state.fontLoaded && <StorybookUI />}
        </View>
      </ThemeProvider>
    );
  }
}

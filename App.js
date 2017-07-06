import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import StorybookUI from './storybook';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false};
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Gotham Rounded SSm A, Gotham Rounded SSm B': require('./static/gotham.ttf'),
      'Gotham XNarrow SSm A, Gotham XNarrow SSm B': require('./static/gotham.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.fontLoaded && <StorybookUI />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

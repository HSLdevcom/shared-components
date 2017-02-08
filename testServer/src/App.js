// eslint-disable-next-line
import * as styles from './styles.css';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import ComponentList from './ComponentList';
import {hslTheme} from './theme.hsl';

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={hslTheme}>
        <ComponentList/>
      </ThemeProvider>
    );
  }
}
export default App;

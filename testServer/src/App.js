// eslint-disable-next-line
import * as styles from './styles.css';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import ComponentList from './ComponentList';


const hslTheme = {
  primary: 'blue',
  secondary: 'white'
};

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

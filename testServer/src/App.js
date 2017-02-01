import React, {Component} from 'react';
import {Button, AppHeader} from '../../lib/';

class App extends Component {
  clicked() {
    console.log('clicked');
  }
  render() {
    return (
      <div>
        <h1>AppHeader</h1>
        <AppHeader/>
        <h1>Button</h1>
        <Button onClick={this.clicked}>Kirjaudu sisään</Button>
      </div>
    );
  }
}

export default App;

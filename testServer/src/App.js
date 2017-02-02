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
        <Button inverted={false} onClick={this.clicked}>sample text</Button>
      </div>
    );
  }
}

export default App;

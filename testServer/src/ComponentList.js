import React from 'react';
import {Button, AppHeader} from '../../lib/';

const ComponentList = () => {
  return (
    <div>
      <h1>AppHeader</h1>
      <AppHeader/>
      <h1>Button</h1>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </div>
  );
}

export default ComponentList;

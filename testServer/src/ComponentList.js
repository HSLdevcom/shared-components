import React from 'react';
import {Button, AppHeader, Input} from '../../lib/';

const ComponentList = () => {
  return (
    <div>
      <h1>AppHeader</h1>
      <AppHeader/>
      <h1>Button</h1>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
      <Input type="text" placeholder="placeholder"></Input>
    </div>
  );
}

export default ComponentList;

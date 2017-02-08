import React, {Component} from 'react';
import {Button, AppHeader, Input, AppBar} from '../../lib/';

class ComponentList extends Component {
  itemClick(navItem) {
    console.log(navItem);
  }
  render() {
    const linkItems = [
      {
        name: 'etusivu',
        nameEn: 'front page',
        href: '/frontpage'
      }, {
        name: 'sivu2',
        nameEn: 'page 2',
        href: '/page2'
      }, {
        name: 'sivu3',
        nameEn: 'page 3',
        href: '/page3'
      }
    ];

    return (
      <div>
        <h1>AppHeader</h1>
        <AppHeader/>
        <h1>Button</h1>
        <Button primary>Primary</Button>
        <Button>Secondary</Button>
        <h1>Input</h1>
        <Input type="text" placeholder="placeholder"></Input>
        <h1>AppBar</h1>
        <AppBar title="Title text" items={linkItems} onItemClick={this.itemClick}/>
      </div>
    );
  }
}

export default ComponentList;

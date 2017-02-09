import React, {Component} from 'react';
import {Button, AppHeader, Input, AppBar, Separator} from '../../lib/';
import styled from 'styled-components';

const Wrapper = styled.div `
  padding: 20px;
`;

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
      <Wrapper>
        <h1>AppHeader</h1>
        <AppHeader/>
        <Separator/>
        <h1>Button</h1>
        <Button primary>Primary</Button>
        <Button>Secondary</Button>
        <Separator/>
        <h1>Input</h1>
        <Input type="text" placeholder="placeholder"></Input>
        <Separator/>
        <h1>AppBar</h1>
        <AppBar title="Title text" items={linkItems} onItemClick={this.itemClick}/>
      </Wrapper>
    );
  }
}

export default ComponentList;

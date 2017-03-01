import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { Button, AppHeader, Input, Separator, Nav, PageTitle } from '../../lib/';


const Wrapper = styled.div`
`;

const languages = [{id: 'fi', name: 'FI'}, {id: 'sv', name: 'SV'}, {id: 'en', name: 'EN'}];

class ComponentList extends Component {

  static itemClick(navItem) {
    console.log(navItem);
  }
  static langClick(lang) {
    console.log('Changing language to:', lang.displayName);
  }
  render() {
    const linkItems = [
      {
        name: 'etusivu',
        nameEn: 'front page',
        route: '/frontpage',
        icon: 'linktoIcon'
      }, {
        name: 'sivu2',
        nameEn: 'page 2',
        route: '/page2',
        icon: 'linktoIcon2'
      }, {
        name: 'sivu3',
        nameEn: 'page 3',
        route: '/page3',
        icon: 'linktoIcon3'
      },
    ];

    return (
      <Wrapper>
        <h1>Nav</h1>
        <Nav logo={'https://www.hsl.fi/sites/all/themes/custom/hsl/logo.png'} title={'HSL'} languages={languages}>
          <Link to="/">Koti</Link>
          <Link to="/test">Minun kortit</Link>
          <Link to="/test">Asetukset</Link>
          <Link to="/test">Kirjaudu ulos</Link>
        </Nav>
        <Separator />
        <h1>AppHeader</h1>
        <AppHeader />
        <Separator />
        <h1>Button primary</h1>
        <Button primary>Primary</Button>
        <Separator />
        <h1>Button</h1>
        <Button>Secondary</Button>
        <Separator />
        <h1>Input</h1>
        <Input type="text" placeholder="placeholder" />
        <Separator />
        <h1>PageTitle</h1>
        <PageTitle>Sivun otsikko</PageTitle>
        <Separator />
      </Wrapper>
    );
  }
}

export default ComponentList;

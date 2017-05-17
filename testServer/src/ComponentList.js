import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { Button, AppHeader, Input, Separator, Nav, PageTitleBar, Container } from '../../lib/';
import arrow from './static/arrow_left.svg';


const Wrapper = styled.div`
`;

const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];

const testFunc = () => {
  console.log('click');
};
class ComponentList extends Component {

  static itemClick(navItem) {
    console.log(navItem);
  }
  static langClick(lang) {
    console.log('Changing language to:', lang);
  }

  render() {
    return (
      <Wrapper>
        <h1>Nav</h1>
        <Nav logo={'https://www.hsl.fi/sites/all/themes/custom/hsl/logo.png'} alt={'HSL'} languages={languages} changeLanguage={this.langClick}>
          <Link to="/">Koti</Link>
          <Link to="/test">Minun kortit</Link>
          <Link to="/test">Asetukset</Link>
          <Link to="/test">Kirjaudu ulos</Link>
        </Nav>
        <h1>Nav with title (overrides items)</h1>
        <Nav logo={'https://www.hsl.fi/sites/all/themes/custom/hsl/logo.png'} alt={'HSL'} languages={languages} changeLanguage={this.langClick} title="nasdaq">
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
        <PageTitleBar backButton={arrow} onBackClick={testFunc}>
          <h1>Otsikko back</h1>
        </PageTitleBar>
        <PageTitleBar>
          <h1>Pelkkä otsikko</h1>
        </PageTitleBar>
        <Separator />
        <h1>Container</h1>
        <Container>
          <h1>Otsikko</h1>
          <Button primary>Button</Button>
        </Container>
        <Separator />
      </Wrapper>
    );
  }
}

export default ComponentList;

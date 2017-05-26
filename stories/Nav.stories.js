import React from 'react';
import { Link } from 'react-router';
import { setAddon, storiesOf } from '@kadira/storybook';
import { action } from '@kadira/storybook-addon-actions';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import Nav from '../src/Nav/Nav';
import logo from './static/logo.png';

setAddon(JSXAddon);

const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('without title', () =>
  (<Nav logo={logo} alt={'HSL'} languages={languages} changeLanguage={action('language changed')}>
    <Link to="/">Koti</Link>
    <Link to="/test">Minun kortit</Link>
    <Link to="/test">Asetukset</Link>
    <Link to="/test">Kirjaudu ulos</Link>
  </Nav>)
)
  .addWithJSX('with title', () => {
    const title = text('Title', 'Some title');
    return (<Nav logo={logo} alt={'HSL'} languages={languages} changeLanguage={action('language changed')} title={title}>
      <Link to="/">Koti</Link>
      <Link to="/test">Minun kortit</Link>
      <Link to="/test">Asetukset</Link>
      <Link to="/test">Kirjaudu ulos</Link>
    </Nav>);
  });

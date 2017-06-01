import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import Menu from '../src/Menu/Menu';
import IconWithText from '../src/IconWithText/IconWithText';
import { SignIn, TravelCard } from '../src/Icons';

setAddon(JSXAddon);

const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const StyledMenu = Menu.extend`
    width: 300px;
    color: #ffffff;
    background-color: #007ac9;
    padding: 25px;
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const langSelect = {
    height: '2rem',
    width: '6rem'
  };
  const searchIcon = {
    height: '2rem',
    width: '2rem',
    fill: '#FFFFFF'
  };
  return (
    <StyledMenu
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      searchIcon={searchIcon}
      langSelect={langSelect}
    >
      <IconWithText
        icon={<SignIn />}
        text={'Matkakortti'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
      <IconWithText
        icon={<TravelCard />}
        text={'Kirjaudu'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
    </StyledMenu>);
});

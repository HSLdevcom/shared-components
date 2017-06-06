import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs';

import Menu, { MenuSmall } from '../src/Menu';
import IconWithText from '../src/IconWithText/IconWithText';
import { SignIn, TravelCard } from '../src/Icons';

setAddon(JSXAddon);

const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const StyledMenu = Menu.extend`
    width: 300px;
    padding: 25px;
    .lang-select {
      height: 2rem;
      width: 6rem;
    }
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const searchIcon = {
    height: '2rem',
    width: '2rem'
  };
  return (
    <StyledMenu
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      searchIcon={searchIcon}
      iconFill={'#FFFFFF'}
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

stories.addWithJSX('narrow', () => {
  const StyledMenu = Menu.extend`
    width: 100px;
    padding: 25px;
    .lang-select {
      height: auto;
      width: auto;
      .small {
        display:block;
      }
      .large {
        display: none;
      }
    }
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');
  const open = boolean('Display list', false);

  const searchIcon = {
    height: '1.5rem',
    width: '1.5rem'
  };

  const StyledIWT = IconWithText.extend`
    .text {
      display: none;
    }
  `;

  return (
    <StyledMenu
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      searchIcon={searchIcon}
      iconFill={'#FFFFFF'}
      langSelectOpen={open}
    >
      <StyledIWT
        icon={<SignIn />}
        text={'Matkakortti'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
      <StyledIWT
        icon={<TravelCard />}
        text={'Kirjaudu'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
    </StyledMenu>);
});

stories.addWithJSX('minimal', () => {
  const StyledMenu = MenuSmall.extend`
    padding: 1rem;
    height: 3rem;
    width: 300px;
    align-items: center;
    .icon {
      line-height: 0;
    }
    > * {
      height: 2rem;
      display: flex;
    }
    .select-wrapper {
      top: 3.5rem;
    }
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');
  const open = boolean('Display list', false);

  const searchIcon = {
    height: '2rem',
    width: '2rem'
  };

  const StyledIWT = IconWithText.extend`
    .text {
      display: none;
    }
    .icon {
      margin: 0;
    }
  `;

  return (
    <StyledMenu
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      searchIcon={searchIcon}
      iconFill={'#FFFFFF'}
      langSelectOpen={open}
    >
      <StyledIWT
        icon={<SignIn />}
        text={'Matkakortti'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
      <StyledIWT
        icon={<TravelCard />}
        text={'Kirjaudu'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
    </StyledMenu>);
});

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs';

import Menu, { MenuSmall, MenuMobile } from '../src/Menu';
import FlexWrapper from '../src/FlexWrapper/FlexWrapper';
import IconWithText from '../src/IconWithText/IconWithText';
import { HorizontalMenuSeparator } from '../src/Separator/Separator';
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
        icon={<TravelCard />}
        text={'Matkakortti'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
      <StyledIWT
        icon={<SignIn />}
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
        icon={<TravelCard />}
        text={'Matkakortti'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
      <StyledIWT
        icon={<SignIn />}
        text={'Kirjaudu'}
        textPosition={'Right'}
        fill={'#FFFFFF'}
        height={'2rem'}
      />
    </StyledMenu>);
});


stories.addWithJSX('mobile', () => {
  const StyledMenu = MenuMobile.extend`
    background-color: #007ac9;
    color: #ffffff;
    ${HorizontalMenuSeparator} {
      margin: 0;
      width: 2px;
    }
    ${FlexWrapper} {
      margin: 0 5rem;
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

  const StyledIWT = IconWithText.extend`

  `;

  return (
    <StyledMenu
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      searchIcon={searchIcon}
      iconFill={'#FFFFFF'}
    >
      <FlexWrapper>
        <StyledIWT
          icon={<TravelCard />}
          text={'Matkakortti'}
          textPosition={'Bottom'}
          fill={'#FFFFFF'}
          height={'3.5rem'}
        />
        <HorizontalMenuSeparator />
        <StyledIWT
          icon={<SignIn />}
          text={'Kirjaudu'}
          textPosition={'Bottom'}
          fill={'#FFFFFF'}
          height={'3.5rem'}
        />
      </FlexWrapper>
    </StyledMenu>);
});

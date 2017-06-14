import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import Menu, { MenuSmall, MenuMobile, MenuItem } from '../src/Menu';

import { JourneyPlanner } from '../src/Icons';

setAddon(JSXAddon);

const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  return (
    <Menu
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
    />);
});


stories.addWithJSX('minimal', () => {
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  return (
    <MenuSmall
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
    />);
});


stories.addWithJSX('mobile', () => {
  const StyledMenu = MenuMobile.extend`
    background-color: #007ac9;
    color: #ffffff;
  `;
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  return (
    <StyledMenu
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      iconFill={'#FFFFFF'}
    />
  );
});

stories.addWithJSX('menu item', () => {
  const icon = <JourneyPlanner height="2.5rem" width="2.5rem" />;
  const link = <Link to="/test" />;
  const StyledMenuItem = MenuItem.extend`
    background-color: #007ac9;
    color: #ffffff;
  `;

  return (
    <StyledMenuItem
      link={link}
      icon={icon}
      text="Reittiopas"
    />
  );
});

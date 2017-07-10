import React from 'react';
import { Link } from 'react-router';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Menu, MenuSmall, MenuMobile, MenuItem, Div } from '../src';

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

  const StyledDiv = Div.extend`
    width: 10em;
    padding: 2em;
    background: lightgrey;
  `;
  const small = boolean('Small', false);
  const active = boolean('active', false);
  const textPosition = select('Text position', {
    Right: 'Right',
    Bottom: 'Bottom',
  }, 'Bottom');

  return (
    <StyledDiv>
      <StyledMenuItem
        link={link}
        icon={icon}
        small={small}
        active={active}
        textPosition={textPosition}
        text="Reittiopas"
      />
    </StyledDiv>
  );
});

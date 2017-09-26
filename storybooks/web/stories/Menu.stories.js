import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { A, Menu, MenuSmall, MenuMobile, MenuItem, Div, Icons } from 'hsl-shared-components';


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
  const StyledA = A.extend`
    display: flex;
    align-items: stretch;
    justify-content: center;
  `;
  return (
    <MenuSmall
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
    >
      <MenuItem
        link={<StyledA href="/test" />}
        icon={<Icons.TravelCard height="1.5rem" width="1.5rem" fill="#ffffff" />}
        text="Matkakortti"
        textPosition="Right"
        key="travelcard"
        active
        small
      />
      <MenuItem
        link={<StyledA href="/test" />}
        icon={<Icons.SignIn height="1.5rem" width="1.5rem" fill="#ffffff" />}
        text="Kirjaudu"
        textPosition="Right"
        key="signin"
        small
      />
    </MenuSmall>);
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
  const icon = <Icons.JourneyPlanner height="2.5rem" width="2.5rem" fill="#ffffff" />;
  const link = <A href="/test" />;
  const StyledMenuItem = MenuItem.extend`
    background-color: #007ac9;
  `;

  const StyledDiv = Div.extend`
    width: 10em;
    padding: 2em;
    background: lightgrey;
  `;
  const small = boolean('Small', false);
  const active = boolean('active', false);

  return (
    <StyledDiv>
      <StyledMenuItem
        link={link}
        icon={icon}
        small={small}
        active={active}
        text="Reittiopas"
      />
    </StyledDiv>
  );
});

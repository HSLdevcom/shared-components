import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { ThemeProvider } from 'styled-components';
import { Footer, Text, Icons } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';


addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

setAddon(JSXAddon);

const stories = storiesOf('Footer', module);

stories.addWithJSX('default', () => {
  const account = {
    title: 'Ota HSL -tunnus käyttöön',
    button: {
      text: 'Luo tunnus',
      onPress: () => {}
    },
    benefits: [
      'Lataa matkakorttia verkossa',
      'Hyödynnä asiakasetuja',
      'Tallenna suosikki linjat, reitit ja paikat',
      'Ota kaupunkipyörät käyttöön'
    ]
  };

  const socialMedia = {
    title: 'Tykkää, seuraa ja keskustele',
    icons: [
      {
        icon: <Icons.Facebook height="36px" width="18px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {},
        key: 'facebook'
      },
      {
        icon: <Icons.Twitter height="27px" width="36px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {},
        key: 'twitter'
      },
      {
        icon: <Icons.Instagram height="30px" width="30px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {},
        key: 'instagram'
      }
    ]
  };
  const LinkText = Text.extend`
    color: ${props => props.theme.primary};
  `;
  const info = {
    copyright: '© Copyright HSL',
    links: [
      <LinkText key="1" size={2}>Yhteystiedot</LinkText>,
      <LinkText key="2" size={2}>Tietosuojalauseke</LinkText>,
      <LinkText key="3" size={2}>Rekisteriseloste</LinkText>,
      <LinkText key="4" size={2}>Tietoa sivustosta</LinkText>
    ]
  };
  return (
    <Footer info={info} account={account} socialMedia={socialMedia} />
  );
});

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
        onLongPress: () => {}
      },
      {
        icon: <Icons.Twitter height="27px" width="36px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Instagram height="30px" width="30px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Linkedin height="30px" width="36px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Youtube height="34px" width="34px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      }
    ]
  };
  const LinkText = Text.extend`
    color: ${props => props.theme.primary};
  `;
  const info = {
    copyright: '© Copyright HSL',
    links: [
      <LinkText>Yhteystiedot</LinkText>,
      <LinkText>Tietosuojalauseke</LinkText>,
      <LinkText>Rekisteriseloste</LinkText>,
      <LinkText>Tietoa sivustosta</LinkText>
    ]
  };
  return (
    <Footer info={info} account={account} socialMedia={socialMedia} frontpage />
  );
});

stories.addWithJSX('sub site', () => {
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
        onLongPress: () => {}
      },
      {
        icon: <Icons.Twitter height="27px" width="36px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Instagram height="30px" width="30px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Linkedin height="30px" width="36px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      },
      {
        icon: <Icons.Youtube height="34px" width="34px" fill="#007ac9" />,
        onPress: () => {},
        onLongPress: () => {}
      }
    ]
  };
  const LinkText = Text.extend`
    color: ${props => props.theme.primary};
  `;
  const info = {
    copyright: '© Copyright HSL',
    links: [
      <LinkText>Yhteystiedot</LinkText>,
      <LinkText>Tietosuojalauseke</LinkText>,
      <LinkText>Rekisteriseloste</LinkText>,
      <LinkText>Tietoa sivustosta</LinkText>
    ]
  };
  return (
    <Footer info={info} account={account} socialMedia={socialMedia} />
  );
});

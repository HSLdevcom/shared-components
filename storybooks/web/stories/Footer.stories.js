import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { ThemeProvider } from 'styled-components';
import { Footer, Text, Icons, ButtonWithText } from 'hsl-shared-components';

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

  const links = [
    <ButtonWithText
      key="1"
      icon={<Icons.Alert fill="#ffffff" height="30px" width="30px" />}
      onPress={() => {}}
      text="Häiriöt ja poikkeukset"
      style={{ backgroundColor: '#dc0451' }}
      small
    />,
    <ButtonWithText
      key="2"
      icon={<Icons.TravelCard fill="#ffffff" height="30px" width="30px" />}
      onPress={() => {}}
      text="Lataa matkakorttia"
      style={{ backgroundColor: '#4ea700' }}
      small
    />,
    <ButtonWithText
      key="3"
      icon={<Icons.MobileTicket fill="#ffffff" height="30px" width="30px" />}
      onPress={() => {}}
      text="Ota mobiililippu käyttöön"
      small
    />,
    <ButtonWithText
      key="4"
      icon={<Icons.Bike fill="#ffffff" height="30px" width="30px" />}
      onPress={() => {}}
      text="Kaupunkipyörät"
      style={{ backgroundColor: '#fcbc19' }}
      small
    />,
    <ButtonWithText
      key="5"
      icon={<Icons.CustomerService fill="#ffffff" height="30px" width="30px" />}
      onPress={() => {}}
      text="Asiakaspalvelu ja palaute"
      small
    />
  ];

  return (
    <Footer info={info} account={account} socialMedia={socialMedia} links={links} />
  );
});

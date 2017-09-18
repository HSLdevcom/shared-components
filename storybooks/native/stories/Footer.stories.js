import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Footer, Text, Icons, ButtonWithText } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

import ScrollView from './ScrollView';

storiesOf('Footer', module)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ScrollView>{getStory()}</ScrollView>
    </ThemeProvider>))
  .add('default', () => {
    const account = {
      title: 'Ota HSL -tunnus käyttöön',
      button: {
        text: 'Luo tunnus',
        onPress: action('press')
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
          icon: <Icons.Facebook height="36" width="18" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Twitter height="27" width="36" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Instagram height="30" width="30" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Linkedin height="30" width="36" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Youtube height="34" width="34" fill="#007ac9" />,
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
        <LinkText >Yhteystiedot</LinkText>,
        <LinkText >Tietosuojalauseke</LinkText>,
        <LinkText >Rekisteriseloste</LinkText>,
        <LinkText >Tietoa sivustosta</LinkText>
      ]
    };
    return (
      <Footer info={info} account={account} socialMedia={socialMedia} frontpage />
    );
  })
  .add('sub site', () => {
    const account = {
      title: 'Ota HSL -tunnus käyttöön',
      button: {
        text: 'Luo tunnus',
        onPress: action('press')
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
          icon: <Icons.Facebook height="36" width="18" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Twitter height="27" width="36" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Instagram height="30" width="30" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Linkedin height="30" width="36" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {}
        },
        {
          icon: <Icons.Youtube height="34" width="34" fill="#007ac9" />,
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
        <LinkText >Yhteystiedot</LinkText>,
        <LinkText>Avoimet työpaikat</LinkText>,
        <LinkText >Tietosuojalauseke</LinkText>,
        <LinkText >Rekisteriseloste</LinkText>,
        <LinkText >Tietoa sivustosta</LinkText>
      ]
    };

    const links = [
      <ButtonWithText
        key="1"
        icon={<Icons.Alert fill="#ffffff" height="30" width="30" />}
        onPress={() => {}}
        text="Häiriöt ja poikkeukset"
        small
      />,
      <ButtonWithText
        key="2"
        icon={<Icons.TravelCard fill="#ffffff" height="30" width="30" />}
        onPress={() => {}}
        text="Lataa matkakorttia"
        small
      />,
      <ButtonWithText
        key="3"
        icon={<Icons.MobileTicket fill="#ffffff" height="30" width="30" />}
        onPress={() => {}}
        text="Ota mobiililippu käyttöön"
        small
      />,
      <ButtonWithText
        key="4"
        icon={<Icons.Bike fill="#ffffff" height="30" width="30" />}
        onPress={() => {}}
        text="Kaupunkipyörät"
        small
      />,
      <ButtonWithText
        key="5"
        icon={<Icons.CustomerService fill="#ffffff" height="30" width="30" />}
        onPress={() => {}}
        text="Asiakaspalvelu ja palaute"
        small
      />
    ];

    return (
      <Footer info={info} account={account} socialMedia={socialMedia} links={links} />
    );
  });

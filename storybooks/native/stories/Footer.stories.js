import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Footer, Text, Icons } from 'hsl-shared-components';

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
          onLongPress: () => {},
          key: 'facebook'
        },
        {
          icon: <Icons.Twitter height="27" width="36" fill="#007ac9" />,
          onPress: () => {},
          onLongPress: () => {},
          key: 'twitter'
        },
        {
          icon: <Icons.Instagram height="30" width="30" fill="#007ac9" />,
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

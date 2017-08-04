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

  const socialMedia = [
    {
      icon: <Icons.Facebook height="36px" width="18px" />,
      onPress: () => {},
      onLongPress: () => {}
    },
    {
      icon: <Icons.Twitter height="27px" width="36px" />,
      onPress: () => {},
      onLongPress: () => {}
    },
    {
      icon: <Icons.Instagram height="30px" width="30px" />,
      onPress: () => {},
      onLongPress: () => {}
    }
  ];

  const info = {
    copyright: '© Copyright HSL',
    links: [
      <Text size={2}>Yhteystiedot</Text>,
      <Text size={2}>Tietosuojalauseke</Text>,
      <Text size={2}>Rekisteriseloste</Text>,
      <Text size={2}>Tietoa sivustosta</Text>
    ]
  };
  return (
    <Footer info={info} account={account} socialMedia={socialMedia} />
  );
}, { displayName: 'Footer' });

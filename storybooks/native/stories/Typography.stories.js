import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { Text, H1, H2, H3, H4, H5, P, Quote, Ingress, Caption, InfoText, ErrorText, ListText, ResponsiveProvider, Theme } from 'hsl-shared-components';
import { ThemeProvider } from 'styled-components';

import CenterView from './CenterView';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>)
  )
  .add('default', () => <Text>HSL Liikuttaa</Text>)
  .add('H1', () => <H1>HSL Liikuttaa</H1>)
  .add('H2', () => <H2>HSL Liikuttaa</H2>)
  .add('H3', () => <H3>HSL Liikuttaa</H3>)
  .add('H4', () => <H4>HSL Liikuttaa</H4>)
  .add('H5', () => <H5>HSL Liikuttaa</H5>)
  .add('Paragraph', () => <P>Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.</P>)
  .add('Quote', () => <Quote>Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.</Quote>)
  .add('Ingress', () => <Ingress>Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.</Ingress>)
  .add('Caption', () => <Caption>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</Caption>)

  .add('InfoText', () => {
    const strong = boolean('Strong', false);
    return (
      <InfoText
        strong={strong}
      >
        Aenean lacinia bibendum nulla sed consectetur.
        Etiam porta sem malesuada magna mollis euismod.
      </InfoText>
    );
  })
  .add('ErrorText', () => <ErrorText>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</ErrorText>)
  .add('ListText', () => {
    const type = select('Type', { dot: 'dot', circle: 'circle' }, 'dot');
    return (
      <ListText
        type={type}
      >
        Aenean lacinia bibendum nulla sed consectetur.
        Etiam porta sem malesuada magna mollis euismod.
      </ListText>
    );
  });

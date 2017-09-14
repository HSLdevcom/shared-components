import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { H1, H2, H3, H4, H5, P, Quote, Ingress, Caption, InfoText, ErrorText, ListText } from 'hsl-shared-components';

setAddon(JSXAddon);
const stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('H1', () => <H1>HSL Liikuttaa</H1>);
stories.addWithJSX('H2', () => <H2>HSL Liikuttaa</H2>);
stories.addWithJSX('H3', () => <H3>HSL Liikuttaa</H3>);
stories.addWithJSX('H4', () => <H4>HSL Liikuttaa</H4>);
stories.addWithJSX('H5', () => <H5>HSL Liikuttaa</H5>);
stories.addWithJSX('Paragraph', () => {
  const small = boolean('Small', false);
  return (
    <P
      small={small}
    >
      Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luo
      malla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suun
      nitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyt
      tää. Palvelu on maksuton.
    </P>
  );
});
stories.addWithJSX('Quote', () => <Quote>Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.</Quote>);
stories.addWithJSX('Ingress', () => <Ingress>Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.</Ingress>);
stories.addWithJSX('Caption', () => <Caption>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</Caption>);

stories.addWithJSX('InfoText', () => {
  const strong = boolean('Strong', false);
  const small = boolean('Small', false);
  return (
    <InfoText
      strong={strong}
      small={small}
    >
      Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
    </InfoText>
  );
});

stories.addWithJSX('ErrorText', () => {
  const small = boolean('Small', false);
  return (
    <ErrorText
      small={small}
    >
      Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
    </ErrorText>);
});
stories.addWithJSX('ListText', () => {
  const small = boolean('Small', false);
  return (
    <ListText
      small={small}
    >
      Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
    </ListText>
  )
});

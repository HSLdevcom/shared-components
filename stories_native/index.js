import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';

import { Text, H1, H2, H3, H4, H5, P, Quote, Ingress, Caption, InfoText, ErrorText, ListText,
          NewsFeedItem,
          Button } from '../src/native';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
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
    const large = boolean('Large', false);
    return (
      <InfoText
        large={large}
      >
        Aenean lacinia bibendum nulla sed consectetur.
        Etiam porta sem malesuada magna mollis euismod.
      </InfoText>
    );
  })
  .add('ErrorText', () => <ErrorText>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</ErrorText>)
  .add('ListText', () => <ListText>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</ListText>);


const TODAY_2PM = new Date();
TODAY_2PM.setHours(14, 0, 0, 0);

storiesOf('News feed', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('News feed', () => (
    <NewsFeedItem
      category="example"
      title="example example example example"
      timestamp={TODAY_2PM}
      image="https://placehold.it/500x500"
    />
  ))
  .add('News feed item', () => (
    <NewsFeedItem
      category="example"
      title="example example example example"
      timestamp={TODAY_2PM}
      image="https://placehold.it/500x500"
    />
  ));


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
  })
  .add('primary', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      primary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Primary Button
    </Button>);
  })
  .add('secondary', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Secondary Button
    </Button>);
  });

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { NewsFeedItem, NewsFeed } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

import ScrollView from './ScrollView';


const TODAY_2PM = new Date();
TODAY_2PM.setHours(14, 0, 0, 0);
const ONE_DAY = 86400000;
const YESTERDAY_2PM = new Date(TODAY_2PM - ONE_DAY);

storiesOf('NewsFeed', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ScrollView>{getStory()}</ScrollView>
    </ThemeProvider>))
  .add('News feed', () => (
    <NewsFeed more={{ text: 'Näytä lisää', action: action('Button pressed') }}>
      <NewsFeedItem
        category="Talviaikataulut"
        title="HSL:n talviaikataulut tulevat voimaan 15.8 - muutoksia useille linjoille"
        timestamp={TODAY_2PM}
        image="https://placehold.it/125x521"
      />
      <NewsFeedItem
        category="Uusi linja"
        title="Uusi raitiolinja 5, Rauttatientori-Katajanokka, aloittaa 20.6"
        timestamp={TODAY_2PM}
        image="https://placehold.it/521x125"
      />
      <NewsFeedItem
        category="Talviaikataulut"
        title="HSL:n talviaikataulut tulevat voimaan 15.8 - muutoksia useille linjoille"
        timestamp={TODAY_2PM}
        image="https://placehold.it/500x500"
      />
      <NewsFeedItem
        category="Uusi linja"
        title="Uusi raitiolinja 5, Rauttatientori-Katajanokka, aloittaa 20.6"
        timestamp={YESTERDAY_2PM}
        image="https://placehold.it/50x50"
      />
      <NewsFeedItem
        category="Talviaikataulut"
        title="HSL:n talviaikataulut tulevat voimaan 15.8 - muutoksia useille linjoille"
        timestamp={YESTERDAY_2PM}
      />
    </NewsFeed>
  ))
  .add('News feed item', () => (
    <NewsFeedItem
      category="Talviaikataulut"
      title="HSL:n talviaikataulut tulevat voimaan 15.8 - muutoksia useille linjoille"
      timestamp={TODAY_2PM}
      image="https://placehold.it/500x500"
    />
  ));

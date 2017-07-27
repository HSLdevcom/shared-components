import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import Theme from './../themes/themes.hsl';

import CenterView from './CenterView';

import { NewsFeedItem, NewsFeed } from 'hsl-shared-components/native';


const TODAY_2PM = new Date();
TODAY_2PM.setHours(14, 0, 0, 0);
const ONE_DAY = 86400000;
const YESTERDAY_2PM = new Date(TODAY_2PM - ONE_DAY);

storiesOf('NewsFeed', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('News feed', () => (
    <NewsFeed more={{ text: 'Näytä lisää', action: action('Button pressed') }}>
      <NewsFeedItem
        category="example"
        title="example example example example"
        timestamp={TODAY_2PM}
        image="https://placehold.it/500x500"
      />
      <NewsFeedItem
        category="example"
        title="example example example example"
        timestamp={YESTERDAY_2PM}
        image="https://placehold.it/500x500"
      />
    </NewsFeed>
  ))
  .add('News feed item', () => (
    <NewsFeedItem
      category="example"
      title="example example example example"
      timestamp={TODAY_2PM}
      image="https://placehold.it/500x500"
    />
  ));

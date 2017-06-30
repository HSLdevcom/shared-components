import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { NewsFeed, NewsFeedItem } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('NewsFeed', module);
stories.addDecorator(withKnobs);
const TODAY_2PM = new Date();
TODAY_2PM.setHours(14, 0, 0, 0);
const ONE_DAY = 86400000;
const YESTERDAY_2PM = new Date(TODAY_2PM - ONE_DAY);
stories.addWithJSX('default', () => (
  <NewsFeed header="Header">
    <NewsFeedItem
      category="example"
      title="example example example example"
      timestamp={TODAY_2PM}
      image="https://placehold.it/125x521"
    />
    <NewsFeedItem
      category="example"
      title="example example example example"
      timestamp={TODAY_2PM}
      image="https://placehold.it/521x125"
    />
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
      image="https://placehold.it/50x50"
    />
  </NewsFeed>)
);

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import { Map } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('Map', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('simple', () => (
  <Map
    width={number('Width', 600)}
    height={number('Height', 600)}
    latitude={number('Latitude', 60.17)}
    longitude={number('Longitude', 24.93)}
    zoom={number('Zoom', 12)}
  />
), { displayName: 'Map' });


stories.addWithJSX('with extra layers', () => (
  <Map
    width={number('Width', 600)}
    height={number('Height', 600)}
    latitude={number('Latitude', 60.2)}
    longitude={number('Longitude', 24.94)}
    zoom={number('Zoom', 15)}
    components={{
      stops: { enabled: true },
      citybikes: { enabled: true },
    }}
  />
), { displayName: 'Map' });

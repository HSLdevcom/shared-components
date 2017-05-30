import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Text from '../src/Text/Text';

const options = {
  inline: 'Inline',
  block: 'Block',
};

const colors = {
  black: 'Black',
  red: 'Red',
  blue: 'Blue',
  yellow: 'Yellow',
};

setAddon(JSXAddon);
const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  const color = select('Colors', colors, 'Black');
  const display = select('Display', options, 'inline');
  const sampleText = text('Text', 'Sample text');

  return (<div>
    <span>Some other text </span>
    <Text display={display} color={color}>{sampleText}</Text>
  </div>);
}, { displayName: 'Text' });

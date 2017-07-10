import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Span } from '../src';

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
const stories = storiesOf('Span', module);
stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  const color = select('Colors', colors, 'Black');
  const display = select('Display', options, 'inline');

  const sampleText = text('Text', 'Sample text');
  const style = { color, display };

  return (<div>
    <span>Some other text </span>
    <Span style={style}>{sampleText}</Span>
  </div>);
}, { displayName: 'Span' });

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from '../src';


setAddon(JSXAddon);

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const placeholder = text('Placeholder', 'placeholder');
  return (<Input type="text" placeholder={placeholder} />);
}, { displayName: 'Input' });

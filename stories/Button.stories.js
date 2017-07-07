import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import { Button } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
    >
      Default Button
    </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('primary', () => {
  const disabled = boolean('Disabled', false);
  return (
    <Button
      disabled={disabled}
      primary
    >
    Primary Button
  </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('secondary', () => {
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
      secondary
    >
    Secondary Button
  </Button>);
}
, { displayName: 'Button' });

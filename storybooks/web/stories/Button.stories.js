import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Button } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';


setAddon(JSXAddon);

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  const small = boolean('Small', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('primary', () => {
  const disabled = boolean('Disabled', false);
  const small = boolean('Small', false);
  return (
    <Button
      disabled={disabled}
      small={small}
      primary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
    Primary Button
  </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('secondary', () => {
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  const small = boolean('Small', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
    Secondary Button
  </Button>);
}
, { displayName: 'Button' });

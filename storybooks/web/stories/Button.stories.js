import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, Icons } from 'hsl-shared-components';

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
  const large = boolean('Large', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      large={large}
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
  const large = boolean('Large', false);
  return (
    <Button
      disabled={disabled}
      small={small}
      large={large}
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
  const large = boolean('Large', false);
  return (
    <Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      large={large}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
    Secondary Button
  </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('round button', () => (
  <RoundButton><Icons.Facebook height="36px" width="18px" /></RoundButton>
), { displayName: 'SocialMediaButton' });

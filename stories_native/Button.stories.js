import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import Theme from './../themes/themes.hsl';
import CenterView from './CenterView';

import { Button } from '../src/native';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
  })
  .add('primary', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      primary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Primary Button
    </Button>);
  })
  .add('secondary', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Secondary Button
    </Button>);
  });

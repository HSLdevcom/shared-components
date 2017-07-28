import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Button } from 'hsl-shared-components/native';

import Theme from './../themes/themes.hsl';
import CenterView from './CenterView';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    const small = boolean('Small', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
  })
  .add('primary', () => {
    const disabled = boolean('Disabled', false);
    const small = boolean('Small', false);
    return (<Button
      disabled={disabled}
      small={small}
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
    const small = boolean('Small', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Secondary Button
    </Button>);
  });

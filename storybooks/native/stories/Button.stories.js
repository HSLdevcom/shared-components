import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, Icons, ButtonWithText } from 'hsl-shared-components';

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
    const large = boolean('Large', false);
    return (<Button
      disabled={disabled}
      rounded={rounded}
      small={small}
      large={large}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
  })
  .add('primary', () => {
    const disabled = boolean('Disabled', false);
    const small = boolean('Small', false);
    const large = boolean('Large', false);
    return (<Button
      disabled={disabled}
      small={small}
      large={large}
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
    const large = boolean('Large', false);
    return (<Button
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
  })
  .add('round button', () => {
    const small = boolean('Small', false);
    const large = boolean('Large', false);
    return (
      <RoundButton
        small={small}
        large={large}
      >
        <Icons.Facebook height="36" width="18" fill="#007ac9" />
      </RoundButton>
    );
  })
  .add('button with text', () => {
    const small = boolean('Small', false);
    const large = boolean('Large', false);
    const icon = <Icons.Bike height="30" width="30" fill="#eeaaff" />;
    return (
      <ButtonWithText
        small={small}
        large={large}
        text="Kaupunkipyörät"
        icon={icon}
        onPress={action('press')}
      />
    );
  });

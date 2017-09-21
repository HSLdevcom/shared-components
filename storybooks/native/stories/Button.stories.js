import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, Icons, ButtonWithText, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('default', () => {
    const hover = boolean('Hover', false);
    const active = boolean('Active', false);
    const focus = boolean('Focus', false);
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    const small = boolean('Small', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
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
    const hover = boolean('Hover', false);
    const active = boolean('Active', false);
    const focus = boolean('Focus', false);
    const success = boolean('Success', false);
    const disabled = boolean('Disabled', false);
    const small = boolean('Small', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      small={small}
      primary
      success={success}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Primary Button
    </Button>);
  })
  .add('secondary', () => {
    const hover = boolean('Hover', false);
    const active = boolean('Active', false);
    const focus = boolean('Focus', false);
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    const small = boolean('Small', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      rounded={rounded}
      small={small}
      secondary
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Secondary Button
    </Button>);
  })
  .add('round button', () => {
    const small = boolean('Small', false);
    return (
      <RoundButton
        small={small}
        onPress={action('press')}
        onLongPress={action('long press')}
      >
        <Icons.Facebook height="36" width="18" fill="#007ac9" />
      </RoundButton>
    );
  })
  .add('button with text', () => {
    const small = boolean('Small', false);
    const icon = <Icons.Bike height="30" width="30" fill="#eeaaff" />;
    return (
      <ButtonWithText
        small={small}
        text="Kaupunkipyörät"
        icon={icon}
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    );
  });

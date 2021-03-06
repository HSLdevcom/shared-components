import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, Icons, ButtonWithText, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('default', () => {
    const hover = boolean('Hover', false);
    const active = boolean('Active', false);
    const focus = boolean('Focus', false);
    const disabled = boolean('Disabled', false);
    const square = boolean('Square', false);
    const small = boolean('Small', false);
    const transparent = boolean('Transparent', false);
    const iconKnob = boolean('Icon', false);
    const icon = iconKnob ? <Icons.Facebook /> : null;
    const iconAfterText = boolean('iconAfterText', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      square={square}
      small={small}
      transparent={transparent}
      icon={icon}
      iconAfterText={iconAfterText}
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
    const iconKnob = boolean('Icon', false);
    const icon = iconKnob ? <Icons.Edit /> : null;
    const iconAfterText = boolean('iconAfterText', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      small={small}
      primary
      success={success}
      icon={icon}
      iconAfterText={iconAfterText}
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
    const square = boolean('Square', false);
    const small = boolean('Small', false);
    const transparent = boolean('Transparent', false);
    const iconKnob = boolean('Icon', false);
    const icon = iconKnob ? <Icons.Facebook /> : null;
    const iconAfterText = boolean('iconAfterText', false);
    return (<Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      square={square}
      small={small}
      transparent={transparent}
      secondary
      icon={icon}
      iconAfterText={iconAfterText}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Secondary Button
    </Button>);
  })
  .add('inverted', () => {
    const hover = boolean('Hover', false);
    const active = boolean('Active', false);
    const focus = boolean('Focus', false);
    const disabled = boolean('Disabled', false);
    const small = boolean('Small', false);
    const iconKnob = boolean('Icon', false);
    const icon = iconKnob ? <Icons.Facebook /> : null;
    const iconAfterText = boolean('iconAfterText', false);
    return (
      <Button
        hover={hover}
        active={active}
        focus={focus}
        disabled={disabled}
        small={small}
        inverted
        icon={icon}
        iconAfterText={iconAfterText}
        onClick={action('click')}
      >
      Primary Button
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
        <Icons.Facebook />
      </RoundButton>
    );
  })
  .add('button with text', () => {
    const small = boolean('Small', false);
    const icon = <Icons.Bike fill="#eeaaff" />;
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

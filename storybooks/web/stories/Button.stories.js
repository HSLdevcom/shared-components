import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, ButtonWithText, Icons, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const hover = boolean('Hover', false);
  const active = boolean('Active', false);
  const focus = boolean('Focus', false);
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  const transparent = boolean('Transparent', false);
  const small = boolean('Small', false);
  return (
    <Button
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
      rounded={rounded}
      transparent={transparent}
      small={small}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      Default Button
    </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('primary', () => {
  const hover = boolean('Hover', false);
  const active = boolean('Active', false);
  const focus = boolean('Focus', false);
  const success = boolean('Success', false);
  const disabled = boolean('Disabled', false);
  const small = boolean('Small', false);
  return (
    <Button
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
}
, { displayName: 'Button' });

stories.addWithJSX('secondary', () => {
  const hover = boolean('Hover', false);
  const active = boolean('Active', false);
  const focus = boolean('Focus', false);
  const disabled = boolean('Disabled', false);
  const rounded = boolean('Rounded', false);
  const small = boolean('Small', false);
  return (
    <Button
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
}
, { displayName: 'Button' });

stories.addWithJSX('round button', () => {
  const small = boolean('Small', false);
  return (
    <RoundButton
      small={small}
      onPress={action('press')}
      onLongPress={action('long press')}
    >
      <Icons.Facebook height="36px" width="18px" fill="#007ac9" />
    </RoundButton>
  );
});

stories.addWithJSX('button with text', () => {
  const small = boolean('Small', false);
  const icon = <Icons.Bike height="30px" width="30px" fill="#eeaaff" />;
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

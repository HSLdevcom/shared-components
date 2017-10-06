import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Button, RoundButton, ButtonWithText, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {getStory()}
    </ResponsiveProvider>
  </ThemeProvider>));

stories.addWithJSX('default', () => {
  const hover = boolean('Hover', false);
  const active = boolean('Active', false);
  const focus = boolean('Focus', false);
  const disabled = boolean('Disabled', false);
  const square = boolean('Square', false);
  const transparent = boolean('Transparent', false);
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
      square={square}
      transparent={transparent}
      small={small}
      icon={icon}
      iconAfterText={iconAfterText}
      onClick={action('click')}
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
      primary
      success={success}
      icon={icon}
      iconAfterText={iconAfterText}
      onClick={action('click')}
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
  const square = boolean('Square', false);
  const small = boolean('Small', false);
  const transparent = boolean('Transparent', false);
  const iconKnob = boolean('Icon', false);
  const icon = iconKnob ? <Icons.Facebook /> : null;
  const iconAfterText = boolean('iconAfterText', false);
  return (
    <Button
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
      onClick={action('click')}
    >
    Secondary Button
  </Button>);
}
, { displayName: 'Button' });

stories.addWithJSX('inverted', () => {
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
}
, { displayName: 'Button' });

stories.addWithJSX('round button', () => {
  const small = boolean('Small', false);
  return (
    <RoundButton
      small={small}
      onClick={action('click')}
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
      onClick={action('click')}
    />
  );
});

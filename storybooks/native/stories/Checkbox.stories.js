import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Checkbox, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('Default', () => {
    const checked = boolean('Checked', false);
    const error = boolean('Error', false);
    const inverted = boolean('Inverted', false);
    const disabled = boolean('Disabled', false);
    const title = text('Title', 'Checkbox title');
    return (
      <Checkbox
        checked={checked}
        error={error}
        disabled={disabled}
        title={title}
        inverted={inverted}
        onPress={action('Checkbox pressed')}
      />);
  });

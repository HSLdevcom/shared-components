import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { TextInput, Theme } from 'hsl-shared-components';

import ScrollView from './ScrollView';

storiesOf('Input/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ScrollView>{getStory()}</ScrollView>
    </ThemeProvider>))
  .add('Default', () => {
    const placeholder = text('Placeholder', 'placeholder');
    const error = boolean('Error', false);
    return (
      <TextInput placeholder={placeholder} error={error} />
    );
  }, { displayName: 'TextInput' })
  .add('Autofocus', () => {
    const placeholder = text('Placeholder', 'placeholder');
    const error = boolean('Error', false);
    return (
      <TextInput placeholder={placeholder} autoFocus error={error} />
    );
  }, { displayName: 'TextInput' });

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { TextInput } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

import ScrollView from './ScrollView';

storiesOf('Input/TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ScrollView>{getStory()}</ScrollView>
    </ThemeProvider>))
  .add('Default', () => {
    const placeholder = text('Placeholder', 'placeholder');
    const focus = boolean('Focus', false);
    const error = boolean('Error', false);
    return (<TextInput placeholder={placeholder} focus={focus} error={error} />);
  }, { displayName: 'TextInput' });


import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Checkbox } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

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
    const disabled = boolean('Disabled', false);
    return (
      <Checkbox checked={checked} error={error} disabled={disabled} />);
  });

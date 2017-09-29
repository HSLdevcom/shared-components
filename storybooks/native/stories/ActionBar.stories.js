import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { ActionBarItem, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('ActionBar', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('Default', () => {
    const title = text('Title', 'Ruskeasuon varikko');
    const iconKnob = boolean('Icon', true);
    const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
    return (
      <ActionBarItem
        title={title}
        icon={icon}
        onPress={action('press')}
        onLongPress={action('longPress')}
      />
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Icons, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('ActionList', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('default', () => {
    const title = text('Title', 'Arvoliput matkakortilla');
    return (
      <ActionListItem
        title={title}
      />
    );
  })
  .add('ActionListItem', () => {
    const title = text('Title', 'Ruskeasuon varikko');
    const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
    const active = boolean('Active', false);
    const centered = boolean('Centered', false);
    const arrow = boolean('Arrow', true);
    const negative = boolean('Negative', false);
    const withBorder = boolean('withBorder', true);
    const iconKnob = boolean('Icon', true);
    const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
    return (
      <ActionListItem
        title={title}
        subtitle={subtitle}
        active={active}
        centered={centered}
        icon={icon}
        arrow={arrow}
        negative={negative}
        withBorder={withBorder}
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    );
  });

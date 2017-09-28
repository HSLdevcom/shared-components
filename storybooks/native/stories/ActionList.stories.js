import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { View, Icons, ActionList, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';
import { ListView } from 'react-native';

import CenterView from './CenterView';

const items = [
  {
    title: 'Yleistä kertalipusta',
    icon: null,
    active: true,
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
  },
];
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const data = ds.cloneWithRows(items);

storiesOf('ActionList', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('default', () => {
    const inverted = boolean('Inverted', false);
    const centered = boolean('Centered', false);
    const arrows = boolean('Arrows', true);
    const withBorder = boolean('withBorder', true);
    return (
      <ActionList
        items={data}
        inverted={inverted}
        centered={centered}
        arrows={arrows}
        withBorder={withBorder}
      />
    );
  })
  .add('inverted and centered', () => {
    const inverted = boolean('Inverted', true);
    const centered = boolean('Centered', true);
    const arrows = boolean('Arrows', false);
    const withBorder = boolean('withBorder', true);

    const StyledView = View.extend`
      height: 100%;
      width: 100%;
      background-color: #8a2be2;
    `;

    return (
      <StyledView>
        <ActionList
          items={data}
          inverted={inverted}
          centered={centered}
          arrows={arrows}
          withBorder={withBorder}
        />
      </StyledView>
    );
  })
  .add('ActionListItem', () => {
    const title = text('Title', 'Ruskeasuon varikko');
    const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
    const active = boolean('Active', false);
    const centered = boolean('Centered', false);
    const arrow = boolean('Arrow', true);
    const inverted = boolean('Inverted', false);
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
        inverted={inverted}
        withBorder={withBorder}
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    );
  });

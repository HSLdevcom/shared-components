import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { ActionBar, ActionBarItem, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

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
    const inverted = boolean('Inverted', false);
    const items = [
      {
        title: 'Lippuja ja hintoja',
        icon: <Icons.Tickets />,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        title: 'Reittejä, aikatauluja tai matkustamista',
        icon: <Icons.JourneyPlanner />,
        active: true,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      <ActionBarItem
        key="foo"
        title="Löytötavaroita"
        icon={<Icons.Info />}
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    ];
    return (
      <ActionBar
        items={items}
        inverted={inverted}
      />
    );
  })
  .add('Icons only', () => {
    const inverted = boolean('Inverted', false);
    const items = [
      {
        icon: <Icons.Tickets fill="#7d7d7d" />,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        icon: <Icons.JourneyPlanner fill="#ff5818" />,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        icon: <Icons.Info fill="#ff5818" />,
        active: true,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        icon: <Icons.MobileTicket fill="#82408f" />,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        icon: <Icons.CustomerService />,
        onPress: action('press'),
        onLongPress: action('long press'),
      }
    ];
    return (
      <ActionBar
        items={items}
        inverted={inverted}
      />
    );
  })
  .add('Inverted theme and no icons', () => {
    const inverted = boolean('Inverted', true);
    const items = [
      {
        title: 'Lievä',
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        title: 'Haittaava',
        active: true,
        onPress: action('press'),
        onLongPress: action('long press'),
      },
      {
        title: 'Vaarallinen',
        onPress: action('press'),
        onLongPress: action('long press'),
      },
    ];
    return (
      <ActionBar
        items={items}
        inverted={inverted}
      />
    );
  })
  .add('ActionBarItem', () => {
    const title = text('Title', 'Ruskeasuon varikko');
    const inverted = boolean('Inverted', false);
    const active = boolean('Active', false);
    const iconKnob = boolean('Icon', true);
    const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
    return (
      <ActionBarItem
        title={title}
        icon={icon}
        inverted={inverted}
        active={active}
        onPress={action('press')}
        onLongPress={action('longPress')}
      />
    );
  });

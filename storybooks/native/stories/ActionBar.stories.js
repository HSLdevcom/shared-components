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
      },
      {
        title: 'Reittejä, aikatauluja tai matkustamista',
        icon: <Icons.JourneyPlanner />,
        active: true,
      },
      <ActionBarItem key="foo" title="Löytötavaroita" icon={<Icons.Info />} />
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
      },
      {
        icon: <Icons.JourneyPlanner fill="#ff5818" />,
      },
      {
        icon: <Icons.Info fill="#ff5818" />,
        active: true,
      },
      {
        icon: <Icons.MobileTicket fill="#82408f" />,
      },
      {
        icon: <Icons.CustomerService />,
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
      },
      {
        title: 'Haittaava',
        active: true,
      },
      {
        title: 'Vaarallinen',
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

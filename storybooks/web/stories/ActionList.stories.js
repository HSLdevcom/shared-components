import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { Icons, ActionList, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('ActionList', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {getStory()}
    </ResponsiveProvider>
  </ThemeProvider>));

const items = [
  {
    title: 'Yleistä kertalipusta (active)',
    icon: null,
    active: true,
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
  },
  {
    prefix: '37',
    title: 'Kamppi - Honkasuo',
    icon: <Icons.Info />,
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

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const withBorder = boolean('withBorder', false);
  return (
    <ActionList
      items={items}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('with borders', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const withBorder = boolean('withBorder', true);
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <ActionList
        items={items}
        inverted={inverted}
        centered={centered}
        arrowless={arrowless}
        withBorder={withBorder}
      />
    </div>
  );
});

stories.addWithJSX('inverted and centered', () => {
  const inverted = boolean('Inverted', true);
  const centered = boolean('Centered', true);
  const arrowless = boolean('Arrowless', true);
  const withBorder = boolean('withBorder', true);
  return (
    <div
      style={{
        padding: '10px',
        height: '100vh',
        backgroundColor: '#007ac9',
      }}
    >
      <ActionList
        items={items}
        inverted={inverted}
        centered={centered}
        arrowless={arrowless}
        withBorder={withBorder}
      />
    </div>
  );
});

stories.addWithJSX('ActionListItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Ruskeasuon varikko');
  const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
  const prefix = text('Prefix', '36');
  const href = text('Href', 'http://www.hsl.fi');
  const active = boolean('Active', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const inverted = boolean('Inverted', false);
  const withBorder = boolean('withBorder', false);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
  return (
    <ActionListItem
      type={type}
      href={href}
      title={title}
      subtitle={subtitle}
      prefix={prefix}
      active={active}
      centered={centered}
      icon={icon}
      arrowless={arrowless}
      inverted={inverted}
      withBorder={withBorder}
      onClick={action('click')}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

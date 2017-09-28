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

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrows = boolean('Arrows', true);
  const withBorder = boolean('withBorder', true);
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
  return (
    <ActionList
      items={items}
      inverted={inverted}
      centered={centered}
      arrows={arrows}
      withBorder={withBorder}
    />
  );
}
, { displayName: 'ActionList' });

stories.addWithJSX('ActionListItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Ruskeasuon varikko');
  const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
  const href = text('Href', 'http://www.hsl.fi');
  const active = boolean('Active', false);
  const centered = boolean('Centered', false);
  const arrow = boolean('Arrow', true);
  const inverted = boolean('Inverted', false);
  const withBorder = boolean('withBorder', true);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.JourneyPlanner /> : null;
  return (
    <ActionListItem
      type={type}
      href={href}
      title={title}
      subtitle={subtitle}
      active={active}
      centered={centered}
      icon={icon}
      arrow={arrow}
      inverted={inverted}
      withBorder={withBorder}
      onClick={action('click')}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

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
  const negative = boolean('Negative', false);
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
      icon: null,
    },
    {
      title: 'Tekstiviestilippu',
      icon: null,
    },
  ];
  return (
    <ActionList
      items={items}
      negative={negative}
      centered={centered}
      arrows={arrows}
      withBorder={withBorder}
    />
  );
}
, { displayName: 'ActionList' });

stories.addWithJSX('ActionListItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Arvoliput matkakortilla');
  const href = text('Href', 'http://www.hsl.fi');
  const active = boolean('Active', false);
  const centered = boolean('Centered', false);
  const arrow = boolean('Arrow', true);
  const withBorder = boolean('withBorder', true);
  const negative = boolean('Negative', true);
  const iconKnob = boolean('Icon', false);
  const icon = iconKnob ? <Icons.Facebook /> : null;
  return (
    <ActionListItem
      type={type}
      href={href}
      title={title}
      active={active}
      centered={centered}
      icon={icon}
      arrow={arrow}
      withBorder={withBorder}
      negative={negative}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

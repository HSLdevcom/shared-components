import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { ActionBar, ActionBarItem, Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('ActionBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {getStory()}
    </ResponsiveProvider>
  </ThemeProvider>));

const items = [
  {
    title: 'Lippuja ja hintoja',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Reittejä, aikatauluja tai matkustamista',
    icon: <Icons.JourneyPlanner />,
  },
  {
    title: 'Löytötavaroita',
    icon: <Icons.Info />,
  },
  {
    title: 'HSL:n sähköisiä palveluita',
    icon: <Icons.MobileTicket />,
  },
  {
    title: 'Palveluita yrityksille ja oppilaitoksille',
    icon: <Icons.CustomerService />,
  }
];

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
  return (
    <ActionBar
      items={items}
      inverted={inverted}
    />
  );
});

stories.addWithJSX('ActionBarItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Lippuja ja hintoja');
  const href = text('Href', 'http://www.hsl.fi');
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.Tickets /> : null;
  return (
    <ActionBarItem
      type={type}
      href={href}
      title={title}
      icon={icon}
      onClick={action('click')}
    />
  );
});

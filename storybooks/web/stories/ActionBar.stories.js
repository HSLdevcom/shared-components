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

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
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
      active: true,
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
  return (
    <ActionBar
      items={items}
      inverted={inverted}
    />
  );
});

stories.addWithJSX('Icons only', () => {
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
});

stories.addWithJSX('Inverted theme and no icons', () => {
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
});

stories.addWithJSX('ActionBarItem', () => {
  const type = select('Type', ['button', 'link'], 'button');
  const title = text('Title', 'Lippuja ja hintoja');
  const href = text('Href', 'http://www.hsl.fi');
  const inverted = boolean('Inverted', false);
  const active = boolean('Active', false);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.Tickets /> : null;
  return (
    <ActionBarItem
      type={type}
      href={href}
      title={title}
      icon={icon}
      inverted={inverted}
      active={active}
      onClick={action('click')}
    />
  );
});
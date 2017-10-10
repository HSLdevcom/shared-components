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
      onClick: action('click'),
    },
    {
      title: 'Reittejä, aikatauluja tai matkustamista',
      icon: <Icons.JourneyPlanner />,
      onClick: action('click'),
    },
    {
      title: 'Löytötavaroita',
      icon: <Icons.Info />,
      active: true,
      onClick: action('click'),
    },
    {
      title: 'HSL:n sähköisiä palveluita',
      icon: <Icons.MobileTicket />,
      onClick: action('click'),
    },
    (<ActionBarItem
      key="foo"
      title="Palveluita yrityksille ja oppilaitoksille"
      icon={<Icons.CustomerService />}
      onClick={action('click')}
    />)
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
      onClick: action('click'),
    },
    {
      icon: <Icons.JourneyPlanner fill="#ff5818" />,
      onClick: action('click'),
    },
    {
      icon: <Icons.Info fill="#ff5818" />,
      active: true,
      onClick: action('click'),
    },
    {
      icon: <Icons.MobileTicket fill="#82408f" />,
      onClick: action('click'),
    },
    {
      icon: <Icons.CustomerService />,
      onClick: action('click'),
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
      onClick: action('click'),
    },
    {
      title: 'Haittaava',
      active: true,
      onClick: action('click'),
    },
    {
      title: 'Vaarallinen',
      onClick: action('click'),
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
  const accessibilityRole = select('accessibilityRole', ['button', 'link'], 'button');
  const title = text('Title', 'Lippuja ja hintoja');
  const href = text('Href', 'http://www.hsl.fi');
  const inverted = boolean('Inverted', false);
  const active = boolean('Active', false);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.Tickets /> : null;
  return (
    <ActionBarItem
      accessibilityRole={accessibilityRole}
      href={href}
      title={title}
      icon={icon}
      inverted={inverted}
      active={active}
      onClick={action('click')}
    />
  );
});

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
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

stories.addWithJSX('React router example with custom container', () => {
  const inverted = boolean('Inverted', false);
  /* eslint-disable */
  const Link = ({ to, ...rest }) => <a href={`http://hsl.fi/${to}`} {...rest} />
  Link.displayName = 'Link';
  const items = [
    {
      icon: <Icons.Tickets />,
      title: 'Liput ja hinnat',
      container: {
        component: Link,
        props: {
          to: "/liput-ja-hinnat",
        },
      },
      onClick: action('click'),
    },
    {
      icon: <Icons.JourneyPlanner />,
      title: 'Reitit ja aikataulut',
      container: {
        component: Link,
        props: {
          to: "/reitit-ja-aikataulut",
        },
      },
      onClick: action('click'),
    },
    {
      icon: <Icons.Info />,
      title: 'Ohjeita ja tietoja',
      container: {
        component: Link,
        props: {
          to: "/ohjeita-ja-tietoja",
        },
      },
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


stories.addWithJSX('secondary', () => {
  const inverted = boolean('Inverted', false);
  const secondary = boolean('Secondary', true);
  const items = [
    {
      icon: <Icons.Tickets />,
      onClick: action('click'),
    },
    {
      icon: <Icons.JourneyPlanner />,
      onClick: action('click'),
    },
    {
      icon: <Icons.Info />,
      active: true,
      onClick: action('click'),
    },
    {
      icon: <Icons.MobileTicket />,
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
      secondary={secondary}
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
  const title = text('Title', 'Lippuja ja hintoja');
  const inverted = boolean('Inverted', false);
  const active = boolean('Active', false);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ? <Icons.Tickets /> : null;
  return (
    <ActionBarItem
      title={title}
      icon={icon}
      inverted={inverted}
      active={active}
      onClick={action('click')}
    />
  );
});

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { P, Icons, ActionList, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

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
    type: 'teaser',
    cta: 'Matkakortille',
    content: (
      <P>
        Voit ostaa lippuja, arvoa tai kautta lataamaalla.<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </P>
    ),
    image: <Icons.MobileTicket width="70px" fill={Theme.colors.primary.hslBlue} />,
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
  },
];

const itemsNoTeaser = [
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
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
  },
];

const horizItems = [
  {
    title: 'Kertaliput',
    subtitle: '80–100 min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Vuorokausiliput',
    subtitle: '1–7 vrk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
  },
  {
    title: 'Kausiliput',
    subtitle: 'Alk. 14 vrk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
  },
];

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', false);
  const withBorder = boolean('withBorder', false);
  return (
    <ActionList
      items={items}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('with borders', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', false);
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
        horizontal={horizontal}
        withBorder={withBorder}
      />
    </div>
  );
});

stories.addWithJSX('horizontal', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', true);
  const withBorder = boolean('withBorder', true);
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <ActionList
        items={horizItems}
        inverted={inverted}
        centered={centered}
        arrowless={arrowless}
        horizontal={horizontal}
        withBorder={withBorder}
      />
    </div>
  );
});

stories.addWithJSX('inverted and centered', () => {
  const inverted = boolean('Inverted', true);
  const centered = boolean('Centered', true);
  const arrowless = boolean('Arrowless', true);
  const horizontal = boolean('Horizontal', false);
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
        items={itemsNoTeaser}
        inverted={inverted}
        centered={centered}
        arrowless={arrowless}
        horizontal={horizontal}
        withBorder={withBorder}
      />
    </div>
  );
});

stories.addWithJSX('ActionListItemText', () => {
  const accessibilityRole = select('accessibilityRole', ['button', 'link'], 'button');
  const title = text('Title', 'Ruskeasuon varikko');
  const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
  const description = text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.');
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
      type="text"
      accessibilityRole={accessibilityRole}
      href={href}
      title={title}
      subtitle={subtitle}
      description={description}
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

stories.addWithJSX('ActionListItemTeaser', () => {
  const cta = text('cta', 'Matkakortille');
  const imageKnob = boolean('Image', true);
  const image = imageKnob ?
    <Icons.MobileTicket width="70px" fill={Theme.colors.primary.hslBlue} />
    : null;
  const content = (
    <P>
      Voit ostaa lippuja, arvoa tai kautta lataamaalla.<br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </P>
  );

  return (
    <ActionListItem
      type="teaser"
      image={image}
      cta={cta}
      content={content}
      onClick={action('click')}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

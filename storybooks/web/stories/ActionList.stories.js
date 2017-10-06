import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { View, H1, P, Icons, ActionList, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('ActionList', module);
stories.addDecorator(withKnobs);
stories.addDecorator((getStory) => {
  const StyledView = View.extend`
  `;
  return (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <StyledView>{getStory()}</StyledView>
      </ResponsiveProvider>
    </ThemeProvider>
  );
});

const items = [
  {
    title: 'Yleistä kertalipusta (active)',
    icon: null,
    active: true,
    onClick: action('click'),
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
    onClick: action('click'),
  },
  {
    prefix: '37',
    title: 'Kamppi - Honkasuo',
    icon: <Icons.Info />,
    onClick: action('click'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    icon: <Icons.Tickets />,
    onClick: action('click'),
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
    icon: <Icons.MobileTicket />,
    onClick: action('click'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
    onClick: action('click'),
  },
];

const itemsNoTeaser = [
  {
    title: 'Yleistä kertalipusta (active)',
    icon: null,
    active: true,
    onClick: action('click'),
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
    onClick: action('click'),
  },
  {
    prefix: '37',
    title: 'Kamppi - Honkasuo',
    icon: <Icons.Info />,
    onClick: action('click'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
    onClick: action('click'),
  },
];

const itemsTeaser = [
  {
    type: 'teaser',
    cta: 'Mobiilisovellukseen',
    content: (
      <P>
        Voit ostaa lippuja, arvoa tai kautta lataamaalla.<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </P>
    ),
    icon: <Icons.JourneyPlanner />,
    onClick: action('click'),
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
    icon: <Icons.MobileTicket />,
    onClick: action('click'),
  },
  {
    type: 'teaser',
    content: (
      <View style={{ alignItems: 'flex-start' }}>
        <H1>09 4766 4000</H1>
        <P>
          ma-pe 7–19, la-su 9–17
        </P>
      </View>
    ),
    icon: <Icons.CustomerService />,
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
    onClick: action('click'),
  },
];

const horizItems = [
  {
    title: 'Kertaliput',
    subtitle: '80–100 min',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
  {
    title: 'Vuorokausiliput',
    subtitle: '1–7 vrk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
  {
    title: 'Kausiliput',
    subtitle: 'Alk. 14 vrk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onClick: action('click'),
  },
];

stories.addWithJSX('default', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', false);
  const secondary = boolean('Secondary', false);
  const withBorder = boolean('withBorder', false);
  return (
    <ActionList
      items={items}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      secondary={secondary}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('with borders', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', false);
  const secondary = boolean('Secondary', false);
  const withBorder = boolean('withBorder', true);
  return (
    <ActionList
      items={items}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      secondary={secondary}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('horizontal', () => {
  const inverted = boolean('Inverted', false);
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', true);
  const secondary = boolean('Secondary', false);
  const withBorder = boolean('withBorder', true);
  return (
    <ActionList
      items={horizItems}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      secondary={secondary}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('teasers and secondary', () => {
  const centered = boolean('Centered', false);
  const arrowless = boolean('Arrowless', false);
  const horizontal = boolean('Horizontal', false);
  const secondary = boolean('Secondary', true);
  const withBorder = boolean('withBorder', false);
  return (
    <ActionList
      items={itemsTeaser}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      secondary={secondary}
      withBorder={withBorder}
    />
  );
});

stories.addWithJSX('inverted and centered', () => {
  const inverted = boolean('Inverted', true);
  const centered = boolean('Centered', true);
  const arrowless = boolean('Arrowless', true);
  const horizontal = boolean('Horizontal', false);
  const secondary = boolean('Secondary', false);
  const withBorder = boolean('withBorder', true);
  return (
    <ActionList
      items={itemsNoTeaser}
      inverted={inverted}
      centered={centered}
      arrowless={arrowless}
      horizontal={horizontal}
      secondary={secondary}
      withBorder={withBorder}
    />
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
  const secondary = boolean('Secondary', false);
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
      secondary={secondary}
      withBorder={withBorder}
      onClick={action('click')}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

stories.addWithJSX('ActionListItemTeaser', () => {
  const cta = text('cta', 'Matkakortille');
  const secondary = boolean('Secondary', false);
  const iconKnob = boolean('Icon', true);
  const icon = iconKnob ?
    <Icons.MobileTicket />
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
      icon={icon}
      cta={cta}
      content={content}
      secondary={secondary}
      onClick={action('click')}
      onPress={action('press')}
      onLongPress={action('long press')}
    />
  );
});

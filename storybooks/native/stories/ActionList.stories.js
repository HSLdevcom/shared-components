import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { View, H1, P, Icons, ActionList, ActionListItem, ResponsiveProvider, Theme } from 'hsl-shared-components';
import { ListView } from 'react-native';

import CenterView from './CenterView';

const items = [
  {
    title: 'Yleistä kertalipusta (active)',
    icon: null,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
    active: true,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    prefix: '37',
    title: 'Kamppi - Honkasuo',
    icon: <Icons.Info />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    icon: <Icons.Tickets />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    type: 'teaser',
    cta: 'Matkakortille',
    content: 'Voit ostaa lippuja, arvoa tai kautta lataamaalla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icons.MobileTicket />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
];
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const data = ds.cloneWithRows(items);

const itemsNoTeaser = [
  {
    title: 'Yleistä kertalipusta (active)',
    icon: null,
    active: true,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Mobiililippu',
    icon: <Icons.JourneyPlanner />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    prefix: '37',
    title: 'Kamppi - Honkasuo',
    icon: <Icons.Info />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    icon: <Icons.Tickets />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Ruskeasuon varikko',
    subtitle: 'Pysäkki 1935, Vihdintie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.',
    icon: <Icons.Tickets />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    title: 'Tekstiviestilippu',
    icon: null,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
];

const dsNoTeaser = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataNoTeaser = dsNoTeaser.cloneWithRows(itemsNoTeaser);

const itemsTeaser = [
  {
    type: 'teaser',
    cta: 'Mobiilisovellukseen',
    content: 'Voit ostaa lippuja, arvoa tai kautta lataamaalla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icons.JourneyPlanner />,
    onPress: action('press'),
    onLongPress: action('long press'),
  },
  {
    type: 'teaser',
    cta: 'Matkakortille',
    content: 'Voit ostaa lippuja, arvoa tai kautta lataamaalla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icons.MobileTicket />,
    onPress: action('press'),
    onLongPress: action('long press'),
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
    onPress: action('press'),
    onLongPress: action('long press'),
  },
];

const dsTeaser = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataTeaser = dsTeaser.cloneWithRows(itemsTeaser);

storiesOf('ActionList', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
    .add('default', () => {
      const inverted = boolean('Inverted', false);
      const centered = boolean('Centered', false);
      const arrowless = boolean('Arrowless', false);
      const withBorder = boolean('withBorder', false);

      const StyledView = View.extend``;

      return (
        <StyledView>
          <ActionList
            items={data}
            inverted={inverted}
            centered={centered}
            arrowless={arrowless}
            withBorder={withBorder}
          />
        </StyledView>
      );
    })
    .add('with borders', () => {
      const inverted = boolean('Inverted', false);
      const centered = boolean('Centered', false);
      const arrowless = boolean('Arrowless', false);
      const withBorder = boolean('withBorder', true);

      const StyledView = View.extend``;

      return (
        <StyledView>
          <ActionList
            items={data}
            inverted={inverted}
            centered={centered}
            arrowless={arrowless}
            withBorder={withBorder}
          />
        </StyledView>
      );
    })
    .add('teasers', () => {
      const centered = boolean('Centered', false);
      const arrowless = boolean('Arrowless', false);
      const withBorder = boolean('withBorder', false);
      return (
        <ActionList
          items={dataTeaser}
          centered={centered}
          arrowless={arrowless}
          withBorder={withBorder}
        />
      );
    })
  .add('inverted and centered', () => {
    const inverted = boolean('Inverted', true);
    const centered = boolean('Centered', true);
    const arrowless = boolean('Arrowless', true);
    const withBorder = boolean('withBorder', true);

    const StyledView = View.extend`
      height: 100%;
      width: 100%;
      background-color: #007ac9;
    `;

    return (
      <StyledView>
        <ActionList
          items={dataNoTeaser}
          inverted={inverted}
          centered={centered}
          arrowless={arrowless}
          withBorder={withBorder}
        />
      </StyledView>
    );
  })
  .add('ActionListItemText', () => {
    const title = text('Title', 'Ruskeasuon varikko');
    const subtitle = text('Subtitle', 'Pysäkki 1935, Vihdintie');
    const description = text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum augue.');
    const prefix = text('Prefix', '36');
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
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    );
  })
  .add('ActionListItemTeaser', () => {
    const cta = text('cta', 'Matkakortille');
    const iconKnob = boolean('Icon', true);
    const icon = iconKnob ?
      <Icons.MobileTicket />
      : null;
    const content = 'Voit ostaa lippuja, arvoa tai kautta lataamaalla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return (
      <ActionListItem
        type="teaser"
        icon={icon}
        cta={cta}
        content={content}
        onClick={action('click')}
        onPress={action('press')}
        onLongPress={action('long press')}
      />
    );
  });

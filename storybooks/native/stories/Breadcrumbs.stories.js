import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Breadcrumbs, BreadcrumbItem, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

const items = [
  {
    title: 'Asiakaspalvelu',
    onPress: action('onPress, link 1'),
    onLongPress: action('onLongPress, link 1'),
  },
  {
    title: 'Liput ja hinnat',
    onPress: action('onPress, link 2'),
    onLongPress: action('onLongPress, link 2'),
  },
  {
    title: 'Kertalippu',
    onPress: action('onPress, link 3'),
    onLongPress: action('onLongPress, link 3'),
  },
];

storiesOf('Breadcrumbs', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('Default', () =>
    (<Breadcrumbs items={items} />)
  )
  .add('Single item', () => {
    const title = text('Title', 'Asiakaspalvelu');
    return (
      <BreadcrumbItem
        title={title}
        onPress={action('onPress')}
        onLongPress={action('onLongPress')}
      />
    );
  });

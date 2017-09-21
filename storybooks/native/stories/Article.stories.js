import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Article, Text, ResponsiveProvider } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

import ScrollView from './ScrollView';

storiesOf('Article', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <ScrollView>{getStory()}</ScrollView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('Default', () => {
    const content = text('Content', 'Some content');
    return (<Article>
      <Text>{content}</Text>
    </Article>);
  });

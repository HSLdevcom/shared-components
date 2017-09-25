import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { LangSelect, LangSelectSmall, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

storiesOf('LangSelect', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))
  .add('Default', () => {
    const options = {
      fi: 'FI',
      sv: 'SV',
      en: 'EN',
    };

    const selectedLanguage = select('Selected language', options, 'fi');
    return (
      <LangSelect
        selectedLanguage={selectedLanguage}
        changeLanguage={action('language changed')}
      />);
  })
    .add('Small', () => {
      const options = {
        fi: 'FI',
        sv: 'SV',
        en: 'EN',
      };
      const selectedLanguage = select('Selected language', options, 'fi');

      return (
        <LangSelectSmall
          selectedLanguage={selectedLanguage}
          changeLanguage={action('language changed')}
        />);
    });


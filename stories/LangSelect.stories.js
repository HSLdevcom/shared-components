import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import { LangSelect, LangSelectSmall } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('LangSelect', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
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
});

stories.addWithJSX('small', () => {
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

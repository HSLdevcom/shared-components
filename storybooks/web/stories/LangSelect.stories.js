import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs';

import { LangSelect, LangSelectSmall } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('LangSelect', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const options = {
    fi: 'FIn',
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
    fi: 'FIn',
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

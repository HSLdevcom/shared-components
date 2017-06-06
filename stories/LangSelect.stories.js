import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs';

import LangSelect, { LangSelectSmall } from '../src/LangSelect';

setAddon(JSXAddon);

const stories = storiesOf('LangSelect', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const StyledLangSelect = LangSelect.extend`
    width: 100px;
    height: 25px;
    color: #ffffff;
    background-color: #007ac9;
    padding: 25px;
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');
  return (
    <StyledLangSelect
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
    />);
});

stories.addWithJSX('small', () => {
  const StyledLangSelect = LangSelectSmall.extend`
    width: 60px;
    color: #ffffff;
  `;
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };
  const selectedLanguage = select('Selected language', options, 'fi');

  const open = boolean('Display list', false);


  return (
    <StyledLangSelect
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={action('language changed')}
      open={open}
      fill={'#FFFFFF'}
    />);
});

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import LangSelect from '../src/LangSelect/LangSelect';

setAddon(JSXAddon);

const stories = storiesOf('LangSelect', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const style = {
    width: '100px',
    height: '25px',
    color: '#ffffff',
    backgroundColor: '#007ac9',
    padding: '25px'
  };
  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');
  return (
    <div style={style}>
      <LangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={action('language changed')}
      />
    </div>);
});

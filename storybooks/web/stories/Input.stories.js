import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { TextInput } from 'hsl-shared-components';


setAddon(JSXAddon);

const stories = storiesOf('Input/TextInput', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const placeholder = text('Placeholder', 'placeholder');
  const focus = boolean('Focus', false);
  const error = boolean('Error', false);
  return (<TextInput placeholder={placeholder} focus={focus} error={error} />);
}, { displayName: 'TextInput' });

stories.addWithJSX('focus', () => {
  const placeholder = text('Placeholder', 'placeholder');
  return (<TextInput placeholder={placeholder} focus />);
}, { displayName: 'TextInput' });

stories.addWithJSX('error', () => {
  const placeholder = text('Placeholder', 'placeholder');
  return (<TextInput placeholder={placeholder} error />);
}, { displayName: 'TextInput' });

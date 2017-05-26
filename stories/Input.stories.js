import React from 'react';
import { setAddon, storiesOf } from '@kadira/storybook';
import JSXAddon from 'storybook-addon-jsx';
import Input from '../src/Input/Input';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';


setAddon(JSXAddon);

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const placeholder = text('Placeholder', 'placeholder');
  return (<Input type="text" placeholder={placeholder} />);
}, { displayName: 'Input' });

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from 'hsl-shared-components';


setAddon(JSXAddon);

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const placeholder = text('Placeholder', 'placeholder');
  return (<Input type="text" placeholder={placeholder} />);
}, { displayName: 'Input' });

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { AppHeader } from '../src';


setAddon(JSXAddon);

const stories = storiesOf('AppHeader', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<AppHeader><p>{content}</p></AppHeader>);
}, { displayName: 'AppHeader' });

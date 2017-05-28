import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import AppHeader from '../src/AppHeader/AppHeader';


setAddon(JSXAddon);

const stories = storiesOf('AppHeader', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<AppHeader><p>{content}</p></AppHeader>);
}, { displayName: 'AppHeader' });

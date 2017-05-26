import React from 'react';
import { setAddon, storiesOf } from '@kadira/storybook';
import JSXAddon from 'storybook-addon-jsx';
import AppHeader from '../src/AppHeader/AppHeader';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';


setAddon(JSXAddon);

const stories = storiesOf('AppHeader', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<AppHeader><p>{content}</p></AppHeader>);
}, { displayName: 'AppHeader' });

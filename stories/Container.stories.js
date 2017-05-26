import React from 'react';
import { setAddon, storiesOf } from '@kadira/storybook';
import JSXAddon from 'storybook-addon-jsx';
import Container from '../src/Container/Container';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';


setAddon(JSXAddon);

const stories = storiesOf('Container', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Container><p>{content}</p></Container>);
}, { displayName: 'Container' });

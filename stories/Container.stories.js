import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Container } from '../src';


setAddon(JSXAddon);

const stories = storiesOf('Container', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Container><p>{content}</p></Container>);
}, { displayName: 'Container' });

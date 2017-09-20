import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Main } from 'hsl-shared-components';


setAddon(JSXAddon);

const stories = storiesOf('Main', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Main><p>{content}</p></Main>);
}, { displayName: 'Main' });

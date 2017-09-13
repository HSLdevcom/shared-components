import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Section } from 'hsl-shared-components';


setAddon(JSXAddon);

const stories = storiesOf('Section', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Section><p>{content}</p></Section>);
}, { displayName: 'Section' });

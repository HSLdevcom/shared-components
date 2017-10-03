import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Breadcrumbs } from 'hsl-shared-components';


setAddon(JSXAddon);

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const content = text('Content', 'Some content');
  return (<Breadcrumbs />);
});

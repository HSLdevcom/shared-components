import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { Breadcrumbs } from 'hsl-shared-components';

setAddon(JSXAddon);

const items = [
  {
    title: 'Asiakaspalvelu',
  },
  {
    title: 'Liput ja hinnat',
  },
  {
    title: 'Kertalippu',
  },
];

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  return (<Breadcrumbs items={items} />);
});

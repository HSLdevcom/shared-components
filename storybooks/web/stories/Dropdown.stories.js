import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Dropdown } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const options = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }];

  const selected = select('Selected', [1, 2, 3], 2);
  return (
    <Dropdown
      selectedId={selected}
      onChange={action('changed')}
      items={options}
    />);
});

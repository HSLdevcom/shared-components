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
  const options = [{ id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' }, { id: 3, value: 'Item 3' }];

  const selected = select('Selected', ['Item 1', 'Item 2', 'Item 3'], 'Item 2');
  return (
    <Dropdown
      value={selected}
      onChange={action('changed')}
      items={options}
    />);
});


stories.addWithJSX('no selected value', () => {
  const options = [{ id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' }, { id: 3, value: 'Item 3' }];
  return (
    <Dropdown
      noValue="No items selected!"
      onChange={action('changed')}
      items={options}
    />);
});

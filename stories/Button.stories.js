import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Button from '../src/Button/Button';

setAddon(JSXAddon);

storiesOf('Button', module)
  .addWithJSX('primary', () => <Button primary>Primary Button</Button>, { displayName: 'Button' })
  .addWithJSX('secondary', () => <Button>Secondary Button</Button>, { displayName: 'Button' });

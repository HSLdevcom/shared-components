import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { Button } from '../src';

setAddon(JSXAddon);

storiesOf('Button', module)
  .addWithJSX('primary', () => <Button primary>Primary Button</Button>, { displayName: 'Button' })
  .addWithJSX('secondary', () => <Button>Secondary Button</Button>, { displayName: 'Button' });

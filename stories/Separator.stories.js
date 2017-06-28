import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import { Separator } from '../src';


setAddon(JSXAddon);

storiesOf('Separator', module)
  .addWithJSX('default', () => <Separator />, { displayName: 'Separator' });

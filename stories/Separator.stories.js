import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Separator from '../src/Separator/Separator';


setAddon(JSXAddon);

storiesOf('Separator', module)
  .addWithJSX('default', () => <Separator />, { displayName: 'Separator' });

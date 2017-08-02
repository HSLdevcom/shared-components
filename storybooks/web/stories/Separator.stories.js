import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { Separator } from 'hsl-shared-components';


setAddon(JSXAddon);

storiesOf('Separator', module)
  .addWithJSX('default', () => <Separator />, { displayName: 'Separator' });

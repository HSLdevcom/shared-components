import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';

import { PageTitleBar, Icons } from 'hsl-shared-components';

setAddon(JSXAddon);

storiesOf('PageTitleBar', module)
  .addWithJSX('with back button', () =>
    (<PageTitleBar backButton={<Icons.ArrowLeft fill="#007ac9" height={'1em'} />} onBackClick={action('back button clicked')}>
      <h1>Title</h1>
    </PageTitleBar>))
  .addWithJSX('without back button', () =>
    (<PageTitleBar>
      <h1>Title</h1>
    </PageTitleBar>));

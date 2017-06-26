import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@kadira/storybook-addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import { PageTitleBar } from '../src';
import { ArrowLeft } from '../src/Icons';

setAddon(JSXAddon);

storiesOf('PageTitleBar', module)
  .addWithJSX('with back button', () =>
    <PageTitleBar backButton={<ArrowLeft fill="#007ac9" height={'1em'} />} onBackClick={action('back button clicked')}>
      <h1>Title</h1>
    </PageTitleBar>)
  .addWithJSX('without back button', () =>
    <PageTitleBar>
      <h1>Title</h1>
    </PageTitleBar>);

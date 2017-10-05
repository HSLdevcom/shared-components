import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { Breadcrumbs, BreadcrumbItem } from 'hsl-shared-components';

setAddon(JSXAddon);

const items = [
  {
    title: 'Asiakaspalvelu',
    onClick: action('click, link 1')
  },
  {
    title: 'Liput ja hinnat',
    onClick: action('click, link 2')
  },
  {
    title: 'Kertalippu',
    onClick: action('click, link 3')
  },
];

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () =>
  (<Breadcrumbs items={items} />)
);

stories.addWithJSX('Single item', () => {
  const type = select('Type', ['button', 'link'], 'link');
  const title = text('Title', 'Asiakaspalvelu');
  const href = text('Href', 'http://hsl.fi');
  return (
    <BreadcrumbItem
      type={type}
      title={title}
      href={href}
      onClick={action('click')}
    />
  );
});

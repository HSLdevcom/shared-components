import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

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

/* eslint-disable */
const Link = ({ to, ...rest }) => <a href={`http://hsl.fi/${to}`} {...rest} />
Link.displayName = 'Link';
const itemsContainer = [
  {
    title: 'Liput ja hinnat',
    container: {
      component: Link,
      props: {
        to: "/liput-ja-hinnat",
      },
    },
    onClick: action('click, link 1')
  },
  {
    title: 'Reitit ja aikataulut',
    container: {
      component: Link,
      props: {
        to: "/reitit-ja-aikataulut",
      },
    },
    onClick: action('click, link 2')
  },
  {
    title: 'Ohjeita ja tietoja',
    container: {
      component: Link,
      props: {
        to: "/ohjeita-ja-tietoja",
      },
    },
    onClick: action('click, link 3')
  },
];

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () =>
  (<Breadcrumbs items={items} />)
);

stories.addWithJSX('react router example with custom ontainer', () =>
  (<Breadcrumbs items={itemsContainer} />)
);

stories.addWithJSX('Single item', () => {
  const title = text('Title', 'Asiakaspalvelu')
  return (
    <BreadcrumbItem
      title={title}
      onClick={action('click')}
    />
  );
});

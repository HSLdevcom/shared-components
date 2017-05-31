import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Nav from '../src/Nav/Nav';
import IconWithText from '../src/IconWithText/IconWithText';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest } from '../src/Icons';

setAddon(JSXAddon);

const logo = <HSLLogo />;
const logoFill = '#fff';
const logoHeight = '4rem';

const icons = [
  [<JourneyPlanner />, 'Reittiopas'],
  [<Tickets />, 'Liput ja hinnat'],
  [<CustomerService />, 'Asiakaspalvelu'],
  [<Latest />, 'Uutta']
];

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('default', () =>
  (<Nav logo={logo} logoFill={logoFill} logoHeight={logoHeight}>
    {icons.map(icon => <IconWithText
      icon={icon[0]}
      text={icon[1]}
      textPosition={'Bottom'}
      color={'#fff'}
      fill={'#fff'}
      height={'3rem'}
    />)}
  </Nav>), { displayName: 'Nav' }
);

import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Nav from '../src/Nav/Nav';
import IconWithText from '../src/IconWithText/IconWithText';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More } from '../src/Icons';

setAddon(JSXAddon);

const logo = <HSLLogo />;
const logoFill = '#fff';
const logoHeight = '4rem';

const icons = [
  [<JourneyPlanner />, 'Reittiopas'],
  [<Tickets />, 'Liput ja hinnat'],
  [<CustomerService />, 'Asiakaspalvelu'],
  [<Latest />, 'Uutta'],
  [<More />, 'Lisää']
];

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  const style = {
    color: '#FFFFFF',
    padding: '2rem',
    background: '#007ac9',
    height: '5rem'
  };

  return (<Nav logo={logo} logoFill={logoFill} logoHeight={logoHeight} style={style}>
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <IconWithText
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Bottom'}
        fill={'#fff'}
        height={'2.5rem'}
        width={'2.5rem'}
        style={{ color: '#FFFFFF' }}
      />
    </Link>)
     )}
  </Nav>);
});

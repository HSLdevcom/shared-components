import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Menu, { MenuSmall } from '../src/Menu';
import Nav from '../src/Nav/Nav';
import IconWithText from '../src/IconWithText/IconWithText';
import Span from '../src/Span/Span';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More } from '../src/Icons';

setAddon(JSXAddon);

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
  const logo = <HSLLogo height="3.75rem" />;
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const open = boolean('Display list', false);

  const menu = (<Menu
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
    langSelectOpen={open}
  />);

  return (<Nav logo={logo} menu={menu}>
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <IconWithText
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Bottom'}
        height={'2.5rem'}
        width={'2.5rem'}
        style={{ color: '#FFFFFF' }}
      />
    </Link>)
     )}
  </Nav>);
});


stories.addWithJSX('minimal', () => {
  const logo = <HSLLogo height="3.75rem" />;

  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const open = boolean('Display list', false);

  const NavIWT = IconWithText.extend`
    .icon {
      display: none;
    }
  `;

  const menu = (<MenuSmall
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
    langSelectOpen={open}
  />);

  return (<Nav logo={logo} menu={menu} className="minimal">
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <NavIWT
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


stories.addWithJSX('only title', () => {
  const logo = <HSLLogo height="3.75rem" />;
  const StyledSpan = Span.extend`
    &.child {
      margin: auto;
    }
  `;

  return (<Nav logo={logo} className="minimal">
    <StyledSpan>Lataa kautta</StyledSpan>
  </Nav>);
});

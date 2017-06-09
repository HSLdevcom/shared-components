import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Menu, { MenuSmall, MenuMobile } from '../src/Menu';
import Nav, { NavMobile } from '../src/Nav';
import IconWithText from '../src/IconWithText/IconWithText';
import Span from '../src/Span/Span';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More, TravelCard, SignIn } from '../src/Icons';

setAddon(JSXAddon);

const icons = [
  [<JourneyPlanner height="2.5rem" width="2.5rem" />, 'Reittiopas'],
  [<Tickets height="2.5rem" width="2.5rem" />, 'Liput ja hinnat'],
  [<CustomerService height="2.5rem" width="2.5rem" />, 'Asiakaspalvelu'],
  [<Latest height="2.5rem" width="2.5rem" />, 'Uutta'],
  [<More height="2.5rem" width="2.5rem" />, 'Lisää']
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

  const menu = (<Menu
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  />);

  return (<Nav logo={logo} menu={menu}>
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <IconWithText
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Bottom'}
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

  const NavIWT = IconWithText.extend`
    .icon {
      display: none;
    }
  `;

  const menu = (<MenuSmall
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  />);

  return (<Nav logo={logo} menu={menu} className="minimal">
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <NavIWT
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Bottom'}
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

stories.addWithJSX('mobile', () => {
  const logo = <HSLLogo height="2rem" />;

  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const menu = (<MenuMobile
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  >
    <IconWithText
      icon={<TravelCard height="3.5rem" />}
      text="Matkakortti"
      textPosition="Bottom"
      key="travelcard"
    />
    <IconWithText
      icon={<SignIn height="3.5rem" />}
      text="Kirjaudu"
      textPosition="Bottom"
      key="signin"
    />
  </MenuMobile>);

  return (<NavMobile logo={logo} menu={menu} >
    {icons.map(icon =>
    (<Link to="/test" key={icon[1]}>
      <IconWithText
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Right'}
      />
    </Link>)
     )}
  </NavMobile>);
});

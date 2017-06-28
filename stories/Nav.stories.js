import React from 'react';
import { Link } from 'react-router';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import { Menu, MenuSmall, MenuMobile, MenuItem,
         Nav, NavMobile, NavDesktop, NavItem,
         Div, Span } from '../src';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More, TravelCard, SignIn } from '../src/Icons';

setAddon(JSXAddon);

const longArr = [];
let i = 0;
while (i < 50) {
  longArr.push(i);
  i += 1;
}

const icons = [
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

  const StyledDiv = Div.extend`
    height: 100rem;
  `;

  const menu = (<Menu
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  >
    <MenuItem
      link={<Link to="/test" key="test1" />}
      icon={<TravelCard height="3.5rem" />}
      text="Matkakortti"
      textPosition="Right"
      key="travelcard"
      active
    />
    <MenuItem
      link={<Link to="/test" key="test2" />}
      icon={<SignIn height="3.5rem" />}
      text="Kirjaudu"
      textPosition="Right"
      key="signin"
    />
  </Menu>);

  return (<StyledDiv>
    <Nav logo={logo} menu={menu}>
      <NavItem
        key="Reittiopas"
        link={<Link to="/test" />}
        icon={<JourneyPlanner height="2.5rem" width="2.5rem" />}
        text="Reittiopas"
        textPosition={'Bottom'}
        active
      />
      {icons.map(icon =>
        (<NavItem
          key={icon[1]}
          link={<Link to="/test" />}
          icon={icon[0]}
          text={icon[1]}
          textPosition={'Bottom'}
        />)
     )}
    </Nav>
    {
      longArr.map(ix => <p key={`k ${ix}`}>{ix}</p>)
    }
  </StyledDiv>);
});


stories.addWithJSX('scroll', () => {
  const logo = <HSLLogo height="3.75rem" />;

  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const menu = (<MenuSmall
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  />);

  return (<NavDesktop logo={logo} menu={menu} scroll>
    {icons.map(icon =>
    (
      <NavItem
        key={icon[1]}
        link={<Link to="/test" />}
        icon={icon[0]}
        text={icon[1]}
        textPosition={'Bottom'}
      />)
     )}
  </NavDesktop>);
});


stories.addWithJSX('only title', () => {
  const logo = <HSLLogo height="3.75rem" />;
  const StyledSpan = Span.extend`
    &.child {
      margin: auto;
    }
  `;

  return (<NavDesktop logo={logo} scroll>
    <StyledSpan>Lataa kautta</StyledSpan>
  </NavDesktop>);
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
    <MenuItem
      link={<Link to="/test" key="test1" />}
      icon={<TravelCard height="3.5rem" />}
      text="Matkakortti"
      textPosition="Bottom"
      key="travelcard"
    />
    <MenuItem
      link={<Link to="/test" key="test1" />}
      icon={<SignIn height="3.5rem" />}
      text="Kirjaudu"
      textPosition="Bottom"
      key="signin"
    />
  </MenuMobile>);

  return (<NavMobile logo={logo} menu={menu} >
    {icons.map(icon =>
    (<NavItem
      key={icon[1]}
      link={<Link to="/test" />}
      icon={icon[0]}
      text={icon[1]}
      textPosition={'Right'}
    />)
     )}
  </NavMobile>);
});

stories.addWithJSX('nav item', () => {
  const icon = <JourneyPlanner height="2.5rem" width="2.5rem" />;
  const link = <Link to="/test" />;
  const StyledMenuItem = NavItem.extend`
    background-color: #007ac9;
    color: #ffffff;
  `;

  const StyledDiv = Div.extend`
    width: 10em;
    padding: 2em;
    background: lightgrey;
  `;
  const small = boolean('Small', false);
  const active = boolean('active', false);
  const textPosition = select('Text position', {
    Right: 'Right',
    Bottom: 'Bottom',
  }, 'Bottom');

  return (
    <StyledDiv>
      <StyledMenuItem
        link={link}
        icon={icon}
        small={small}
        active={active}
        textPosition={textPosition}
        text="Reittiopas"
      />
    </StyledDiv>
  );
});

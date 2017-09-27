import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import { Menu, MenuSmall, MenuMobile, MenuItem,
         Nav, NavMobile, NavDesktop, NavItem,
         DropdownMenu, IconWithText,
         Div, Span, List, ListItem,
         Icons,
         A } from 'hsl-shared-components';

setAddon(JSXAddon);

const StyledA = A.extend`
  align-items: stretch;
  flex-direction: row;
  display: flex;
`;

const cog = <Icons.Cog height="2.5rem" width="2.5rem" />;
const DropdownContent = [
  <List header="Liikkumisen palveluita" key="1">
    <ListItem><A href="/test">Kaupunkipyörät</A></ListItem>
    <ListItem><A href="/test">Pyöräparkki</A></ListItem>
    <ListItem><A href="/test">Liityntäpysäköinti</A></ListItem>
    <ListItem><A href="/test">Lähibussit</A></ListItem>
    <ListItem><A href="/test">Pikaratikka</A></ListItem>
  </List>,
  <List header="Tietoa HSL:stä" key="2">
    <ListItem><A href="/test">Päätöksenteko</A></ListItem>
    <ListItem><A href="/test">Strategia</A></ListItem>
    <ListItem><A href="/test">Talous</A></ListItem>
    <ListItem><A href="/test">Hankinnat</A></ListItem>
    <ListItem><A href="/test">Julkaisut</A></ListItem>
    <ListItem><A href="/test">HSL työpaikkana ja avoimet työpaikat</A></ListItem>
    <ListItem><A href="/test">Viestintä</A></ListItem>
  </List>,
  <div key="3">
    <IconWithText
      icon={cog}
      text="Yrityksille"
    />
    <IconWithText
      icon={cog}
      text="Oppilaitoksille"
    />
    <IconWithText
      icon={cog}
      text="Asiakasedut"
    />
    <IconWithText
      icon={cog}
      text="Osta HSL-fanituotteita"
    />
  </div>
];
const Dropdown = (
  <DropdownMenu
    text="Lisää"
  >
    { DropdownContent }
  </DropdownMenu>
);

const longArr = [];
let i = 0;
while (i < 50) {
  longArr.push(i);
  i += 1;
}

const icons = [
  [<Icons.Tickets height="2.5rem" width="2.5rem" />, 'Liput ja hinnat'],
  [<Icons.CustomerService height="2.5rem" width="2.5rem" />, 'Asiakaspalvelu'],
  [<Icons.Latest height="2.5rem" width="2.5rem" />, 'Uutta'],
];

const stories = storiesOf('Nav', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('default', () => {
  const logo = <Icons.HSLLogo fill="#ffffff" height="3.75rem" />;
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
      link={<A href="/test" key="test1" />}
      icon={<Icons.TravelCard height="3.5rem" />}
      text="Matkakortti"
      key="travelcard"
      active
    />
    <MenuItem
      link={<A href="/test" key="test2" />}
      icon={<Icons.SignIn height="3.5rem" />}
      text="Kirjaudu"
      key="signin"
    />
  </Menu>);

  return (<StyledDiv>
    <Nav logo={logo} menu={menu}>
      <NavItem
        key="Reittiopas"
        link={<StyledA href="/test" />}
        icon={<Icons.JourneyPlanner height="2.5rem" width="2.5rem" />}
        text="Reittiopas"
        active
      />
      {icons.map(icon =>
        (<NavItem
          key={icon[1]}
          link={<StyledA href="/test" />}
          icon={icon[0]}
          text={icon[1]}
        />)
     )}
      { Dropdown }
    </Nav>
    {
      longArr.map(ix => <p key={`k ${ix}`}>{ix}</p>)
    }
  </StyledDiv>);
});


stories.addWithJSX('scroll', () => {
  const logo = <Icons.HSLLogo fill="#ffffff" height="3.75rem" />;

  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const menu = (<MenuSmall
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
  >
    <MenuItem
      link={<StyledA href="/test" />}
      icon={<Icons.TravelCard height="1.75rem" width="1.75rem" fill="#ffffff" />}
      text="Matkakortti"
      key="travelcard"
      active
      small
    />
    <MenuItem
      link={<StyledA href="/test" />}
      icon={<Icons.SignIn height="1.75rem" width="1.75rem" fill="#ffffff" />}
      text="Kirjaudu"
      key="signin"
      small
    />
  </MenuSmall>);

  return (<NavDesktop logo={logo} menu={menu} scroll>
    {icons.map(icon =>
    (
      <NavItem
        key={icon[1]}
        link={<A href="/test" />}
        icon={icon[0]}
        text={icon[1]}
      />)
     )}
  </NavDesktop>);
});


stories.addWithJSX('only title', () => {
  const logo = <Icons.HSLLogo fill="#ffffff" height="3.75rem" />;
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
  const logo = <Icons.HSLLogo fill="#ffffff" height="2rem" />;

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
      link={<A href="/test" key="test1" />}
      icon={<Icons.TravelCard height="3.5rem" />}
      text="Matkakortti"
      key="travelcard"
    />
    <MenuItem
      link={<A href="/test" key="test1" />}
      icon={<Icons.SignIn height="3.5rem" />}
      text="Kirjaudu"
      key="signin"
    />
  </MenuMobile>);

  return (<NavMobile logo={logo} menu={menu} visible>
    {icons.map(icon =>
    (<NavItem
      key={icon[1]}
      link={<A href="/test" />}
      icon={icon[0]}
      text={icon[1]}
    />)
     )}
  </NavMobile>);
});

stories.addWithJSX('nav item', () => {
  const icon = <Icons.JourneyPlanner height="2.5rem" width="2.5rem" fill="#ffffff" />;
  const link = <StyledA href="/test" />;
  const StyledNavItem = NavItem.extend`
    background-color: #007ac9;
    color: #ffffff;
  `;

  const StyledDiv = Div.extend`
    width: 15em;
    height: 15em;
    background: lightgrey;
  `;
  const small = boolean('Small', false);
  const active = boolean('active', false);

  return (
    <StyledDiv>
      <StyledNavItem
        link={link}
        icon={icon}
        small={small}
        active={active}
        text="Reittiopas"
      />
    </StyledDiv>
  );
});

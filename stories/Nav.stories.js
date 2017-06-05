import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Media from '../themes/media-templates';
import Menu, { MenuSmall } from '../src/Menu/Menu';
import Nav from '../src/Nav/Nav';
import IconWithText from '../src/IconWithText/IconWithText';
import Span from '../src/Span/Span';

import { HSLLogo, JourneyPlanner, Tickets, CustomerService, Latest, More, SignIn, TravelCard } from '../src/Icons';

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
  const LogoWrapper = Span.extend`
    ${Media.large`
      svg {
        width: 8rem;
      }
    `}
    ${Media.medium`
      svg {
        width: 7rem;
      }
    `}
  `;
  const logo = (<LogoWrapper><HSLLogo fill="#FFFFFF" height="3.75rem" /></LogoWrapper>);

  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const open = boolean('Display list', false);

  const searchIcon = {
    height: '1.5rem',
    width: '1.5rem',
  };
  const StyledMenu = Menu.extend`
    width: 17.5em;
    margin-left: 9em;
    .lang-select {
      height: 1.75rem;
      width: 7rem;
    }
    ${Media.large`
      width: 10em;
      margin-left: 3em;
      .bottom {
        justify-content: flex-end;
      }
    `}
    ${Media.medium`
      width: 7em;
      margin-left: 3em;
      .top, .bottom {
        justify-content: space-between;
      }
      .bottom svg {
        height: 1.75rem;
      }
      .lang-select {
        width: auto;
        .large {
          display: none;
        }
        .small {
          display: block;
        }
      }
    `}
  `;
  const StyledIWT = IconWithText.extend`
    .text {
      ${Media.large`display: none;`}
    }
  `;

  const menu = (<StyledMenu
    languages={languages}
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
    searchIcon={searchIcon}
    iconFill={'#FFFFFF'}
    langSelectOpen={open}
  >
    <StyledIWT
      icon={<TravelCard />}
      text={'Matkakortti'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
    <StyledIWT
      icon={<SignIn />}
      text={'Kirjaudu'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
  </StyledMenu>);
  const StyledNav = Nav.extend`
    color: #FFFFFF;
    padding: 0 2.5rem;
    ${Media.large`
      padding: 0 1.75rem;
    `}
    background: #007ac9;
    height: 9rem;
    > a {
      text-align: center;
      font-size: 1.1rem;
      ${Media.large`
        font-size: 1rem;
      `}

    }
  `;

  return (<StyledNav logo={logo} menu={menu}>
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
  </StyledNav>);
});


stories.addWithJSX('minimal', () => {
  const LogoWrapper = Span.extend`
  padding-left: 1rem;
    svg {
      width: 5.5rem;
    }
  `;
  const logo = (<LogoWrapper><HSLLogo fill="#FFFFFF" height="3.75rem" /></LogoWrapper>);

  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const open = boolean('Display list', false);

  const searchIcon = {
    height: '2rem',
    width: '2rem',
  };
  const StyledMenu = MenuSmall.extend`

    color: #ffffff;
    background-color: #007ac9;
    height: 100%;
    align-items: center;
    .icon {
      line-height: 0;
      margin: 0;
      display: flex;
      align-items: center;
    }
    > * {
      height: 100%;
      display: flex;
      padding: 0 0.75rem;
    }
    .select-wrapper {
      top: 3.5rem;
    }

    margin-left: 20rem;
    ${Media.large`
      margin-left: 0;
      .icon svg, .search-icon {
        height: 1.75rem;
      }
    `}

  `;
  const NavIWT = IconWithText.extend`
    .icon {
      display: none;
    }
  `;

  const MenuIWT = IconWithText.extend`
    .text {
      display: none;
    }
    ${Media.medium`
      display: none;
    `}
  `;

  const menu = (<StyledMenu
    languages={languages}
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
    searchIcon={searchIcon}
    iconFill={'#FFFFFF'}
    langSelectOpen={open}
  >
    <MenuIWT
      icon={<TravelCard />}
      text={'Matkakortti'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
    <MenuIWT
      icon={<SignIn />}
      text={'Kirjaudu'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
  </StyledMenu>);
  const StyledNav = Nav.extend`
    color: #FFFFFF;
    background: #007ac9;
    height: 4rem;
    > a {
      text-align: center;
      font-size: 1rem;
    }
  `;

  return (<StyledNav logo={logo} menu={menu}>
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
  </StyledNav>);
});

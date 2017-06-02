import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

import Media from '../themes/media-templates';
import Menu from '../src/Menu/Menu';
import Nav from '../src/Nav/Nav';
import IconWithText from '../src/IconWithText/IconWithText';

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
  const logo = <HSLLogo fill="#FFFFFF" height="3.75rem" />;

  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const searchIcon = {
    height: '1.5rem',
    width: '1.5rem',
    fill: '#FFFFFF'
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
      width: 5em;
      margin-left: 3em;
      .top, .bottom {
        justify-content: space-between;
      }
      .lang-select {
        width: 2rem;
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
    background: #007ac9;
    height: 9rem;
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

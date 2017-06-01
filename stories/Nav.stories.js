import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';

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
  const style = {
    color: '#FFFFFF',
    padding: '2rem',
    background: '#007ac9',
    height: '5rem'
  };

  const logo = <HSLLogo fill="#FFFFFF" height="4rem" />;

  const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];
  const options = {
    fi: 'FI',
    sv: 'SV',
    en: 'EN',
  };

  const selectedLanguage = select('Selected language', options, 'fi');

  const langSelect = {
    height: '2rem',
    width: '6rem'
  };
  const searchIcon = {
    height: '2rem',
    width: '2rem',
    fill: '#FFFFFF'
  };

  const menu = (<Menu
    languages={languages}
    selectedLanguage={selectedLanguage}
    changeLanguage={action('language changed')}
    searchIcon={searchIcon}
    langSelect={langSelect}
  >
    <IconWithText
      icon={<SignIn />}
      text={'Matkakortti'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
    <IconWithText
      icon={<TravelCard />}
      text={'Kirjaudu'}
      textPosition={'Right'}
      fill={'#FFFFFF'}
      height={'2rem'}
    />
  </Menu>);

  return (<Nav logo={logo} style={style} menu={menu}>
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

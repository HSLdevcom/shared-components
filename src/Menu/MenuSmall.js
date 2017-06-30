import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import IconWithText from '../IconWithText/IconWithText';
import { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { Flex } from '../Wrapper';
import MenuItem from './MenuItem';


const StyledFlex = Flex.extend`
  align-self: stretch;
  .icon {
    line-height: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .icon svg, .search-icon svg {
    height: 1.5rem;
  }

  .search-icon {
    align-items: center;
  }

  svg {
    fill: currentColor;
  }

  align-items: stretch;

  > * {
    border-left: 1px solid ${props => darken(0.1, props.theme.primary)};
    display: flex;

    width: ${props => props.theme.scrollNavHeight || '3.75rem'};
    justify-content: center;
  }
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}

  ${MenuItem} {
    align-items: stretch;
    ${IconWithText} {
      flex: 1;
      margin-top: ${props => props.theme.activatablePointerHeight || '0.6rem'};
      justify-content: center;
    }
  }

  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      .search-icon, ${LangSelectSmall} {
        display: none;
      }
    `
  )}

`;


const MenuSmall = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children
}) => (
  <StyledFlex className={className}>
    {children}
    <Flex className="search-icon">
      <Search
        height="2rem"
        width="2rem"
      />
    </Flex>
    <LangSelectSmall
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={changeLanguage}
    />
  </StyledFlex>
);

const defaultChildren = [
  <MenuItem
    link={<Link to="/test" />}
    icon={<TravelCard height="3.5rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
    active
    small
  />,
  <MenuItem
    link={<Link to="/test" />}
    icon={<SignIn height="3.5rem" />}
    text="Kirjaudu"
    textPosition="Right"
    key="signin"
    small
  />
];


MenuSmall.defaultProps = {
  children: defaultChildren
};


MenuSmall.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })),
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(MenuSmall)``;

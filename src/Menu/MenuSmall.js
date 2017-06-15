import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { Flex } from '../Wrapper';
import MenuItem from './MenuItem';


const StyledFlex = Flex.extend`
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  .icon {
    line-height: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .icon svg, .search-icon svg {
    height: 1.75rem;
  }

  .search-icon {
    svg {
      margin-bottom: 1rem;
    }
    align-items: flex-end;
  }

  ${LangSelectSmall} {
    align-items: flex-end;
    > * {
      margin-bottom: 1rem;
    }
  }

  svg {
    fill: currentColor;
  }

  align-items: stretch;

  > * {
    ${props => (props.theme.menuBorder && `border-left: 1px solid ${props.theme.menuBorder};`)}
    display: flex;
    padding: 0 0.75rem;
  }
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}

  ${MenuItem} {
    align-items: flex-end;

    ${props => (
      props.theme.Media &&
      props.theme.Media.medium`
        display: none;
      `
    )}
  }
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

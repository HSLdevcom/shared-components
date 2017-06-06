import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LangSelectSmall } from '../LangSelect';
import { Search } from '../Icons';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

const MenuSmall = ({
  languages,
  changeLanguage,
  selectedLanguage,
  langSelectOpen,
  searchIcon,
  iconFill,
  className,
  children
}) => (
  <FlexWrapper className={className}>
    {children}
    <Search
      className="search-icon"
      fill={iconFill}
      height={searchIcon.height}
      width={searchIcon.width}
    />
    <LangSelectSmall
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={changeLanguage}
      open={langSelectOpen}
      fill={iconFill}
    />
  </FlexWrapper>
);


MenuSmall.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  searchIcon: PropTypes.shape({
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  }).isRequired,
  iconFill: PropTypes.string.isRequired,
  langSelectOpen: PropTypes.bool,
  className: React.PropTypes.string,
  children: PropTypes.node
};

export default styled(MenuSmall)`
  > * {
    ${props => (props.theme.menuBorder && `border-left: 1px solid ${props.theme.menuBorder};`)}
    padding: 0.5rem;
  }
`;

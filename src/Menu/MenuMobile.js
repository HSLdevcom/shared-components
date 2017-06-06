import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect from '../LangSelect';
import { Search } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Div from '../Div/Div';

const Separator = MenuSeparator.extend`
  height: 2px;
`;

const StyledDiv = Div.extend`
  ${LangSelect} {
    font-size: 1.5rem;
  }
  .children {
    font-size: 2rem;
  }
`;

const MenuMobile = ({
  languages,
  changeLanguage,
  selectedLanguage,
  searchIcon,
  iconFill,
  className,
  children
}) => (
  <StyledDiv className={className}>
    <Separator />
    <FlexWrapper>
      <LangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
      <Search fill={iconFill} height={searchIcon.height} width={searchIcon.width} />
    </FlexWrapper>
    {React.Children.map(children, child => (
      <Div className="children">
        <Separator />
        {child}
      </Div>
    ))}
  </StyledDiv>
);


MenuMobile.propTypes = {
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
  className: React.PropTypes.string,
  children: PropTypes.node
};

export default styled(MenuMobile)``;

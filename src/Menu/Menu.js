import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect, { LangSelectSmall } from '../LangSelect';
import { Search } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span/Span';
import Div from '../Div/Div';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

const StyledDiv = Div.extend`
  .lang-select {
    height: 1.75rem;
    width: 7rem;
    .small {
      display: none;
    }
  }
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
`;

const Menu = ({
  languages,
  changeLanguage,
  selectedLanguage,
  langSelectOpen,
  searchIcon,
  iconFill,
  className,
  children
}) => (
  <StyledDiv className={className}>
    <FlexWrapper className="top">
      <Search fill={iconFill} height={searchIcon.height} width={searchIcon.width} />
      <Span className="lang-select">
        <LangSelect
          className="large"
          languages={languages}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
        />
        <LangSelectSmall
          className="small"
          languages={languages}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
          open={langSelectOpen}
          fill={iconFill}
        />
      </Span>
    </FlexWrapper>
    <MenuSeparator />
    <FlexWrapper className="bottom">
      {children}
    </FlexWrapper>
  </StyledDiv>
);


Menu.propTypes = {
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

export default styled(Menu)``;

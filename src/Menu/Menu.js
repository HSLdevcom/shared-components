import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect, { LangSelectSmall } from '../LangSelect/LangSelect';
import { Search } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span/Span';

const Div = styled.div``;

const FlexWrapper = Div.extend`
  display: flex;
  justify-content: space-between;
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
  <Div className={className}>
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
  </Div>
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

export default styled(Menu)`
  .lang-select {
    height: 1.75rem;
    width: 7rem;
    .small {
      display: none;
    }
  }
`;


const MenuSmallUnstyled = ({
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


MenuSmallUnstyled.propTypes = {
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

const MenuSmall = styled(MenuSmallUnstyled)`
  > * {
    ${props => (props.theme.menuBorder && `border-left: 1px solid ${props.theme.menuBorder};`)}
    padding: 0.5rem;
  }
`;

export { MenuSmall };

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect from '../LangSelect/LangSelect';
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
  searchIcon,
  className,
  children
}) => (
  <Div className={className}>
    <FlexWrapper className="top">
      <Search fill={searchIcon.fill} height={searchIcon.height} width={searchIcon.width} />
      <Span className="lang-select">
        <LangSelect
          languages={languages}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
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
    width: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired
  }).isRequired,
  className: React.PropTypes.string,
  children: PropTypes.node
};

export default styled(Menu)`
  .lang-select {
    height: 1.75rem;
    width: 7rem;
  }
`;

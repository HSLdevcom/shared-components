import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect from '../LangSelect';
import Icons from '../Icons';
import View from '../View';
import { size } from '../utils';


const StyledView = View.extend`
  background: ${props => props.theme.colors.primary.hslBlue};
  align-items: stretch;
`;

const Horizontal = View.extend`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${size(12)};
  margin-horizontal: ${size(12)};
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary.hslBlueDark}
`;

const MenuItems = View.extend`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const MenuMobile = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children,
  items
}) => (
  <StyledView className={className}>
    <Horizontal>
      <LangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
      <Icons.Search height="1.25rem" width="1.25rem" fill="#ffffff" />
    </Horizontal>
    { items }
    <MenuItems>
      {children}
    </MenuItems>
  </StyledView>
);

MenuMobile.propTypes = {
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
  children: PropTypes.node,
  items: PropTypes.node
};

export default styled(MenuMobile)``;

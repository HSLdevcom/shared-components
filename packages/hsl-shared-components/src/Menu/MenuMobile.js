import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import MenuItemMobile from './MenuItemMobile';
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
  border-bottom-color: ${props => props.theme.colors.primary.hslBlueDark};
`;

const MenuItems = View.extend`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-vertical: ${size(30)};
`;

const Divider = View.extend`
  border-color: ${props => props.theme.colors.primary.hslBlueDark};
  border-width: 1px;
`;

const MenuMobile = ({
  languages,
  changeLanguage,
  selectedLanguage,
  children,
  items,
  ...rest
}) => {
  const arr = [];
  React.Children.toArray(children).forEach((child, index, array) => {
    arr.push(<MenuItemMobile {...child.props} />);
    if (index < (array.length - 1)) {
      arr.push(<Divider />);
    }
  });
  return (<StyledView {...rest}>
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
      { arr }
    </MenuItems>
  </StyledView>);
};

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
  children: PropTypes.node,
  items: PropTypes.node
};

export default styled(MenuMobile)``;

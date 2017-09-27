import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/primitives';

import { LangSelectSmall } from '../LangSelect';
import Icons from '../Icons';
import View from '../View';
import { size, Responsive } from '../utils';

export const scrollNavHeight = size(60);

const StyledLangSelectSmall = LangSelectSmall.extend`
  width: ${scrollNavHeight};
  height: ${scrollNavHeight};
  align-items: center;
  justify-content: center;
  border-left-width: ${size(1)};
  border-color: ${props => props.theme.colors.primary.hslBlueDark};
`;

const Wrapper = View.extend`
  align-items: stretch;
  justify-content: center;
  width: ${scrollNavHeight};
  height: ${scrollNavHeight};
  flex-direction: row;
  border-left-width: ${size(1)};
  border-color: ${props => props.theme.colors.primary.hslBlueDark};
`;

const SearchIcon = Wrapper.extend`
  align-items: center;
`;

const StyledView = View.extend`
  flex-direction: row;
  align-self: stretch;
  align-items: stretch;
  background: ${props => props.theme.colors.primary.hslBlue};
`;


const Menu = ({
  languages,
  changeLanguage,
  selectedLanguage,
  children,
  theme,
  small,
  ...rest
}) => (
  <StyledView {...rest}>
    {!small && React.Children.map(children, child => (<Wrapper>{child}</Wrapper>))}
    <SearchIcon>
      <Icons.Search
        height="1.5rem"
        width="1.5rem"
        fill={theme.colors.background.hslWhite}
      />
    </SearchIcon>
    <StyledLangSelectSmall
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={changeLanguage}
    />
  </StyledView>
);


Menu.propTypes = {
  small: PropTypes.boolean,
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
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      background: PropTypes.shape({
        hslWhite: PropTypes.string
      })
    })
  })
};

const MenuSmall = ({ ...props }) => (
  <Responsive
    medium={<Menu small {...props} />}
    large={<Menu {...props} />}
  />
);

export default styled(withTheme(MenuSmall))``;

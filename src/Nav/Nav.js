import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLarge from './NavLarge/NavLarge';
import NavSmall from './NavSmall/NavSmall';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: ${props => props.theme.navbarHeight};
  img {
    height: ${props => props.theme.logoHeight};
    margin-left: 5px;
  }
`;

const Nav = ({ children, logo, title, languages, changeLanguage }) =>
  <StyledNav>
    <img src={logo} alt={title} />
    <NavSmall languages={languages} changeLanguage={changeLanguage}>
      {children}
    </NavSmall>
    <NavLarge changeLanguage={changeLanguage}>
      {children}
    </NavLarge>
  </StyledNav>;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func,
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired
};

export default Nav;

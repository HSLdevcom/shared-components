import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLarge from './NavLarge/NavLarge';
import NavSmall from './NavSmall/NavSmall';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${props => props.theme.background};
  height: ${props => props.theme.navbarHeight};
  img {
    position: absolute;
    left: 0;
    height: ${props => props.theme.logoHeight};
    margin-left: 5px;
  }
  header {
    color: #FFFFFF;
    text-align: center;
    flex-basis: 100vw;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const Nav = ({ children, logo, alt, languages, changeLanguage, title }) =>
  <StyledNav>
    <img src={logo} alt={alt} />
    {title && <header>{title}</header>}
    {!title &&
      <NavSmall languages={languages} changeLanguage={changeLanguage}>
        {children}
      </NavSmall>
    }
    {!title &&
      <NavLarge changeLanguage={changeLanguage}>
        {children}
      </NavLarge>}
  </StyledNav>;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string,
  logo: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func,
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired
};
Nav.defaultProps = {
  alt: '',
  title: ''
};

export default Nav;

import React, { PropTypes } from 'react';
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
    height: 40px;
    margin-left: 5px;
  }
`;

const Title = styled.span`
  color: #fff;
  font-size: 28px;
`;

const Nav = ({ children, logo, title, languages }) =>
  <StyledNav>
    <img src={logo} alt={title} />
    <Title>{title}</Title>
    <NavSmall languages={languages}>
      {children}
    </NavSmall>
    <NavLarge>
      {children}
    </NavLarge>
  </StyledNav>;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired
};

export default Nav;

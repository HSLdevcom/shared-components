import React, { PropTypes } from 'react';
import styled from 'styled-components';
import NavLarge from './NavLarge/NavLarge';
import NavSmall from './NavSmall/NavSmall';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 60px;
  img {
    height: 40px;
    margin-left: 5px;
  }
`;

const Nav = ({ children, logo, title }) =>
  <StyledNav>
    <img src={logo} alt={title} />
    <NavSmall>
      {children}
    </NavSmall>
    <NavLarge>
      {children}
    </NavLarge>
  </StyledNav>;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Nav;

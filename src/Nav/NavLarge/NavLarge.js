import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StyledNavLarge = styled.div`
  display: none;
  width: 100%;
  @media(min-width: ${props => props.theme.md}) {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: flex;
    font-size: 25px;
    margin: 0 15px;
    cursor: pointer;
  }
`;

const NavLarge = ({ children }) =>
  <StyledNavLarge>
    {children}
  </StyledNavLarge>;

NavLarge.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavLarge;

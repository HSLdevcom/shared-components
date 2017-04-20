import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavLarge = styled.div`
  display: none;
  width: 100%;
  @media(min-width: ${props => props.theme.md}) {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: block;
    cursor: pointer;
    text-align: right;
    padding: 5px;
    margin: 30px 15px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    &:hover {
      background-color: #222;
    }
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

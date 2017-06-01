import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span/Span';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  white-space: nowrap;
  .menu {
    margin-left: 3rem;
  }
  justify-content: space-between;
`;

const Nav = ({
  style,
  logo,
  menu,
  children }) =>
    (<StyledNav style={style}>
      <Span>
        { logo }
      </Span>
      {children}
      {React.cloneElement(menu, { className: 'menu' })}
    </StyledNav>);

Nav.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired,
  children: PropTypes.node
};


export default Nav;

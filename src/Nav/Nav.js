import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  white-space: nowrap;
  >a {
    margin: ${props => ((props.style && props.style.linkMargin) || '0 1.5rem')};
  }
`;
const StyledSpan = styled.span``;

const Nav = ({
  style,
  logo,
  menu,
  children }) =>
    (<StyledNav style={style}>
      <StyledSpan className="logo">
        { logo }
      </StyledSpan>
      {children}
      { menu }
    </StyledNav>);

Nav.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired,
  children: PropTypes.node
};


export default Nav;

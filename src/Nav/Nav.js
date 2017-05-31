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
  logoFill,
  logoHeight,
  children }) =>
    (<StyledNav style={style}>
      <StyledSpan className="logo">
        {React.cloneElement(logo, { fill: logoFill, height: logoHeight })}
      </StyledSpan>
      {children}
    </StyledNav>);

Nav.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  logo: PropTypes.element.isRequired,
  logoFill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  logoHeight: PropTypes.string,
  children: PropTypes.node
};


export default Nav;

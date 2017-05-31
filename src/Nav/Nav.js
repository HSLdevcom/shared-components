import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background: ${props => (props.backgroung || props.theme.background || '#FFFFFF')};
  height: ${props => (props.height || props.theme.navbarHeight || 'auto')};
  padding: 2rem;
  .nav-links {
    margin: 0 1.5rem;
  }
`;

const Nav = ({
  logo,
  logoFill,
  logoHeight,
  children }) =>
    (<StyledNav>
      {React.cloneElement(logo, { fill: logoFill, height: logoHeight })}
      {React.Children.map(children, child => <a className="nav-links">{child}</a>)}
    </StyledNav>);

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  logoFill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  logoHeight: PropTypes.string,
  children: PropTypes.node
};


export default Nav;

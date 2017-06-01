import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span/Span';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
`;

const Nav = ({
  className,
  logo,
  menu,
  children }) =>
    (<StyledNav className={className}>
      <Span>
        { logo }
      </Span>
      {children}
      { menu }
    </StyledNav>);

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired,
  children: PropTypes.node
};

export default styled(Nav)``;

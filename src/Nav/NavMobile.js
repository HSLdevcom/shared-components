import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import { addClass } from '../utils';
import Span from '../Span/Span';

const StyledNav = styled.nav`
  svg {
    fill: currentColor;
  }

  .nav-item {
    border-bottom: 2px solid ${props => props.theme.menuBorder};
    display: flex;
    padding: 2.5rem 1.5rem 2.5rem 2.5rem;
    font-size: 2rem;
  }

  .menu-item, .nav-item {
    svg {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
  padding: 1.25rem;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
`;

const Nav = ({
  className,
  logo,
  menu,
  children }) =>
    (<StyledNav className={className}>
      <Span className="logo">
        { logo }
      </Span>

      { React.cloneElement(
        menu,
        { className: cx(menu.props.className, 'menu'),
          items: addClass(children, 'nav-item'),
        },
        addClass(menu.props.children, 'menu-item')
        )
      }
    </StyledNav>);

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

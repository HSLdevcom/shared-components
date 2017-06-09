import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import { addClass } from '../utils';
import Span from '../Span/Span';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import { Cross, Menu } from '../Icons';

const StyledNav = styled.nav`
  svg {
    fill: currentColor;
  }
  .logo svg {
    height: 3rem;
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
  padding: 1.25rem 1.25rem 0rem;

  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
`;

const TopBar = FlexWrapper.extend`
  justify-content: space-between;
  padding-bottom: 1rem;
  align-items: center;
`;

const TopIcons = FlexWrapper.extend`
  align-items: center;
  .text {
    display: none;
  }
  .icon {
    margin: 0;
    line-height:0;
  }
  svg {
    margin-left: 2rem;
    height: 2rem;
  }
`;

const Nav = ({
  className,
  logo,
  menu,
  menuOpen,
  children }) =>
    (<StyledNav className={className}>
      <TopBar>
        <Span className="logo">
          { logo }
        </Span>
        <TopIcons>
          { menu.props.children }
          { menuOpen && <Cross height="3rem" /> }
          { !menuOpen && <Menu height="3rem" /> }
        </TopIcons>
      </TopBar>

      { menuOpen && React.cloneElement(
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
  children: PropTypes.node,
  menuOpen: PropTypes.bool
};

export default styled(Nav)``;

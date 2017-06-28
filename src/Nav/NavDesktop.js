import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import { addClass } from '../utils';
import Span from '../Span';
import NavItem from './NavItem';
import { Activatable } from '../Wrapper';
import DropdownMenu from '../DropdownMenu';


const StyledNav = styled.nav`
  z-index: 1000;
  svg {
    fill: currentColor;
  }
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  justify-content: flex-start;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  padding: 0 1rem 0 2.5rem;
  height: 9rem;
  ${props => (
    props.theme.Media &&
    props.theme.Media.large`
      padding: 0 1.75rem;
      height: 7.5rem;
    `
  )}
  ${DropdownMenu} {
    display: flex;
    align-items: stretch;
    margin: 0 1.5rem;
  }
  ${NavItem}, ${DropdownMenu} ${NavItem} {
    display: flex;
    align-items: stretch;
    font-size: 1.1rem;
    margin: 0 1.5rem;
    .link {
      display: flex;
      ${Activatable} {
        justify-content: center;
      }
    }
    svg {
      height: 2.5rem;
    }
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        margin: 0 0.75rem;
        font-size: 1rem;
        svg {
          height: 2.25rem;
        }
      `
    )}
    ${props => (
      props.theme.Media &&
      props.theme.Media.medium`
        svg {
          height: 1.75rem;
          width: 2rem;
        }
      `
    )}

  }
  > .menu {
    margin-left: auto;
  }
  > .logo {
    margin-right: 1.5rem;
    align-items: center;
    display: flex;
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        margin-right: 1.5rem;
        svg {
          height: 3.25rem;
        }
      `
    )}
    ${props => (
      props.theme.Media &&
      props.theme.Media.medium`
        margin-right: 1.25rem;
          svg {
            height: 2.75rem;
          }
      `
    )}
  }
  ${props => props.scroll && `
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    height: ${props.theme.scrollNavHeight || '3.75rem'};
    padding: 0;
    > .logo {
      padding-left: 1.5rem;
      svg {
        height: 2rem;
      }
      margin-right: 2.5rem;
      ${props.theme.Media &&
        props.theme.Media.large`
          margin-right: 1.5rem;
        `}
      ${props.theme.Media &&
        props.theme.Media.medium`
          margin-right: 0.75rem;
        `}
    }
    &.scroll-enter {
      top: -5rem; // scroll nav height is 4rem
    }

    &.scroll-enter.scroll-enter-active {
      top: 0rem;
      transition: top .35s ease-in;
    }

    &.scroll-leave {
      top: 0rem;
    }

    &.scroll-leave.scroll-leave-active {
      top: -5rem;
      transition: top .35s ease-in;
    }
  `}
`;

const Nav = ({
  className,
  logo,
  menu,
  navRef,
  scroll,
  children }) =>
    (<StyledNav className={className} scroll={scroll} innerRef={navRef}>
      <Span className="logo">
        { logo }
      </Span>
      {React.Children.map(
        children,
        child => React.cloneElement(
          child,
          {
            small: scroll,
            className: cx(child.props.className, 'child'),
          })
        )
      }
      { menu && addClass(menu, 'menu') }
    </StyledNav>);

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  scroll: PropTypes.bool,
  navRef: PropTypes.func,
  children: PropTypes.node
};

export default styled(Nav)``;

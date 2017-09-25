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
  background: ${props => props.theme.colors.primary.hslBlue};
  color: ${props => props.theme.colors.primary.hslWhite};
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
    margin: 0 1.25rem;
  }
  ${NavItem} {
    display: flex;
    align-items: stretch;
    font-size: 1.1rem;
    margin: 0 1.25rem;
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
  &.scroll {
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
        // scroll nav height is 4rem
        transform: translateY(-5rem);
      }

      &.scroll-enter.scroll-enter-active {
        transform: translateY(0);
        transition: transform .35s ease-in;
      }

      &.scroll-leave {
        transform: translateY(0);
      }

      &.scroll-leave.scroll-leave-active {
        transform: translateY(-5rem);
        transition: transform .35s ease-in;
      }
    `}
  }
`;

const Nav = ({
  className,
  logo,
  menu,
  navRef,
  scroll,
  children }) =>
    (<StyledNav
      className={cx(className, { scroll })}
      scroll={scroll}
      innerRef={navRef}
    >
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

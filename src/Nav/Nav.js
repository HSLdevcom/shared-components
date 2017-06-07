import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import Span from '../Span/Span';
import Media from '../../themes/media-templates';


const StyledNav = styled.nav`
  svg {
    fill: currentColor;
  }
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-start;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  padding: 0 2.5rem;
  height: 9rem;

  ${Media.large`
    padding: 0 1.75rem;
  `}
  > .child {
    text-align: center;
    font-size: 1.1rem;
    margin: 0 1.5rem;
    ${Media.large`
      margin: 0 1rem;
      font-size: 1rem;
    `}

  }
  > .menu {
    margin-left: auto;
  }
  > .logo {
    margin-right: 3.5rem;
    ${Media.large`
      margin-right: 2rem;
      svg {
        width: 8rem;
      }
    `}
    ${Media.medium`
      margin-right: 0.5rem;
      svg {
        width: 7rem;
      }
    `}
  }
  &.minimal {
    height: 4rem;
    padding: 0;
    > .child {
      text-align: center;
      font-size: 1rem;
    }
    > .logo {
      padding-left: 1rem;
      svg {
        width: 5.5rem;
      }
    }
  }
`;

function addClass(child, newClass) {
  return React.cloneElement(child, { className: cx(child.props.className, newClass) });
}

const Nav = ({
  className,
  logo,
  menu,
  children }) =>
    (<StyledNav className={className}>
      <Span className="logo">
        { logo }
      </Span>
      {React.Children.map(children, child => addClass(child, 'child'))}
      { menu && addClass(menu, 'menu') }
    </StyledNav>);

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

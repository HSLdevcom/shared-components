import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addClass } from '../utils';
import Span from '../Span/Span';


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
  ${props => (
    props.theme.Media &&
    props.theme.Media.large`
      padding: 0 1.75rem;
    `
  )}
  > .child {
    text-align: center;
    font-size: 1.1rem;
    margin: 0 1.5rem;
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        margin: 0 1rem;
        font-size: 1rem;
      `
    )}

  }
  > .menu {
    margin-left: auto;
  }
  > .logo {
    margin-right: 3.5rem;
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        margin-right: 2rem;
        svg {
          height: 3.25rem;
        }
      `
    )}
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        margin-right: 0.5rem;
          svg {
            height: 2.75rem;
          }
      `
    )}
  }
  ${props => (props.scroll && `
    height: 4rem;
    padding: 0;
    > .child {
      text-align: center;
      font-size: 1rem;
    }
    > .logo {
      padding-left: 1.5rem;
      svg {
        height: 2rem;
      }
    }
  `)}
`;

const Nav = ({
  className,
  logo,
  menu,
  scroll,
  children }) =>
    (<StyledNav className={className} scroll={scroll}>
      <Span className="logo">
        { logo }
      </Span>
      { addClass(children, 'child') }
      { menu && addClass(menu, 'menu') }
    </StyledNav>);

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  scroll: PropTypes.bool,
  children: PropTypes.node
};

export default styled(Nav)``;

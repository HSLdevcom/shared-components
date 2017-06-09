import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { MenuMobile } from '../Menu';

const Header = styled.header`
  ${NavMobile} {
    display: none;
  }
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
    ${NavMobile} {
      display: block;
    }
    ${NavDesktop} {
      display: none;
    }
    `
  )}
`;

const Nav = ({
  className,
  logo,
  menu,
  children }) =>
    (
      <Header className={className}>
        <NavDesktop logo={logo} menu={menu}>
          {children}
        </NavDesktop>
        <NavMobile
          logo={logo}
          menu={menu &&
            <MenuMobile {...menu.props}>
              {React.Children.map(
                menu.props.children,
                child => React.cloneElement(child, { textPosition: 'Bottom' })
                )
              }
            </MenuMobile>
          }
        >
          {children}
        </NavMobile>
      </Header>
    );

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

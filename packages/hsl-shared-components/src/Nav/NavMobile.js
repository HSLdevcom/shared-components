import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash/fp/omit';

import Icons from '../Icons';
import Touchable from '../Touchable';
import View from '../View';
import { size } from '../utils';

export const Height = size(64);

const StyledNav = View.extend`
  background: ${props => props.theme.colors.primary.hslBlue};
  align-items: stretch;
`;

const TopBar = View.extend`
  height: ${Height};
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${size(12)};
  margin-horizontal : ${size(12)};
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary.hslBlueDark}
`;

const TopIcons = View.extend`
  flex-direction: row;
`;
const MenuWrapper = View.extend`
  align-items: stretch;
  background: ${props => props.theme.colors.primary.hslBlue};
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, menuHeight: 0 };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return (<StyledNav
      accessibilityRole="navigation"
      visible={this.props.visible}
      menuOpen={this.state.menuOpen}
      {...omit(this.props, ['navRef', 'logo', 'children'])}
    >
      <TopBar>
        <View>
          { this.props.logo }
        </View>
        <TopIcons>
          {React.Children.map(this.props.menu.props.children, child => (
            React.cloneElement(child, { small: true })
            ))}
          <Touchable onPress={this.toggleMenu}>
            <View onClick={this.toggleMenu}>
              <Icons.Menu height="2rem" width="2rem" fill="#ffffff" />
            </View>
          </Touchable>
        </TopIcons>
      </TopBar>
      <MenuWrapper>
        {
          this.state.menuOpen &&
          React.cloneElement(this.props.menu, { items: this.props.children })
        }
      </MenuWrapper>
    </StyledNav>);
  }
}

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired
};

export default styled(Nav)``;

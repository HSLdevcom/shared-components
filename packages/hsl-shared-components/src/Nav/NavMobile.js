import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import omit from 'lodash/omit';
import { Animated } from 'react-primitives';

import Icons from '../Icons';
import Touchable from '../Touchable';
import View from '../View';
import { size } from '../utils';

export const Height = size(64);

const StyledNav = styled(({ menuOpen, ...rest }) => (
  <View {...rest} />
))`
  background: ${props => props.theme.colors.primary.hslBlue};
  align-items: stretch;
`;

const AnimatedView = styled(props => (
  <Animated.View {...props} />
))`
  align-items: stretch;
  overflow: hidden;
`;

const Menu = View.extend`
  align-items: stretch;
`;

const TopBar = View.extend`
  height: ${Height};
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-horizontal : ${size(12)};
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary.hslBlueDark}
`;

const Logo = View.extend`
  padding-vertical: ${size(12)};
`;

const TopIcons = View.extend`
  flex-direction: row;
  align-items: stretch;
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0)
    };
    this.navHeight = 0;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(e) {
    this.navHeight = e.nativeEvent.layout.height;
  }

  toggleMenu() {
    if (!this.open) {
      Animated.timing(this.state.anim, { toValue: this.navHeight, duration: 250 }).start(() => {
        this.open = true;
      });
    } else {
      Animated.timing(this.state.anim, { toValue: 0, duration: 250 }).start(() => {
        this.open = false;
      });
    }
  }

  render() {
    return (<StyledNav
      accessibilityRole="navigation"
      menuOpen={this.state.menuOpen}
      {...omit(this.props, ['navRef', 'logo', 'children'])}
    >
      <TopBar>
        <Logo>
          { this.props.logo }
        </Logo>
        <TopIcons>
          {React.Children.map(this.props.menu.props.children, child => (
            React.cloneElement(child, { small: true, style: { marginRight: size(16) } })
            ))}
          <Touchable onPress={this.toggleMenu}>
            <View onClick={this.toggleMenu}>
              <Icons.Menu height="2rem" width="2rem" fill="#ffffff" />
            </View>
          </Touchable>
        </TopIcons>
      </TopBar>
      <AnimatedView style={{ maxHeight: this.state.anim }}>
        <Menu onLayout={this.onLayout}>
          {React.cloneElement(this.props.menu, { items: this.props.children })}
        </Menu>
      </AnimatedView>
    </StyledNav>);
  }
}

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash/fp/omit';
import { Animated } from 'react-primitives';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { MenuMobile, MenuSmall } from '../Menu';
import View from '../View';
import { Responsive, IS_NATIVE } from '../utils';

const Header = View.extend`
  width: 100%;
  align-items: stretch;
`;

const Div = Animated.createAnimatedComponent('div');

const ScrollWrap = styled(props => (
  <Div {...props} />
))`
  position: fixed;
  width: 100%;
  top: 0;
  overflow: hidden;
`;


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktopScrollNav: false,
      mobileNavVisible: true,
      anim: new Animated.Value(0)
    };
    this.lastScrollValue = 0;
    this.ticking = false;
    this.navHeight = 0;
    this.scrollHeight = 0;
    this.onScroll = this.onScroll.bind(this);
    this.onLayoutDesktop = this.onLayoutDesktop.bind(this);
    this.onLayoutScroll = this.onLayoutScroll.bind(this);
  }
  componentDidMount() {
    if (!IS_NATIVE) {
      document.addEventListener('scroll', this.onScroll, true);
    }
  }

  componentWillUnmount() {
    if (!IS_NATIVE) {
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }

  onScroll() {
    if (!this.ticking) {
      const scrollY = window.scrollY;
      window.requestAnimationFrame(() => {
        this.onScrollDesktop(scrollY);
        // Save current scroll value
        this.lastScrollValue = scrollY;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  onLayoutDesktop(e) {
    this.navHeight = e.nativeEvent.layout.height;
  }

  onLayoutScroll(e) {
    this.scrollHeight = e.nativeEvent.layout.height;
  }

  onScrollDesktop(scrollY) {
    // Visible when scrolling up and we have scrolled past
    // 3 * nav height

    // When nav is not visible, dont show nav unless we have scrolled 3 x past nav height
    // When nav is visible, hide nav when we reach the bottom of nav
    const boundary = this.state.desktopScrollNav ? this.navHeight : 3 * this.navHeight;

    const scrolledPastBoundary = boundary < scrollY;

    const scrollingUp = scrollY < this.lastScrollValue;

    // Call setState only if state will change
    // TODO: Remove the if after upgrading to react 16 where canceling setState is possible
    if ((scrolledPastBoundary && scrollingUp) && !this.state.desktopScrollNav) {
      this.setState({ desktopScrollNav: true }, () => {
        Animated.timing(this.state.anim, { toValue: this.scrollHeight, duration: 150 }).start();
      });
      return;
    }
    if (!(scrolledPastBoundary && scrollingUp) && this.state.desktopScrollNav && !this.closing) {
      this.closing = true;
      Animated.timing(this.state.anim, { toValue: 0, duration: 150 }).start(() => {
        this.setState({ desktopScrollNav: false });
        this.closing = false;
      });
    }
  }

  render() {
    return (
      <Header
        {...omit(this.props, ['logo', 'menu', 'children'])}
        accessibilityRole="banner"
      >
        <Responsive
          small={
            <NavMobile
              logo={this.props.logo}
              menu={<MenuMobile {...this.props.menu.props} />}
            >
              {this.props.children}
            </NavMobile>}
          medium={
            <NavDesktop
              logo={this.props.logo}
              menu={this.props.menu}
              onLayout={this.onLayoutDesktop}
            >
              {this.props.children}
            </NavDesktop>}
        />
        <ScrollWrap style={{ maxHeight: this.state.anim }}>
          {
            this.state.desktopScrollNav && <Responsive
              small={null}
              medium={
                <NavDesktop
                  logo={this.props.logo}
                  menu={<MenuSmall {...this.props.menu.props} />}
                  onLayout={this.onLayoutScroll}
                  scroll
                >
                  {this.props.children}
                </NavDesktop>}
            />
          }
        </ScrollWrap>
      </Header>
    );
  }
}

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default Nav;

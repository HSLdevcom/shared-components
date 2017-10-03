import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash/fp/omit';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { MenuMobile, MenuSmall } from '../Menu';
import View from '../View';
import { Responsive, IS_NATIVE } from '../utils';

const Header = View.extend`
  width: 100%;
  align-items: stretch;
`;

const ScrollWrap = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`;

const ScrollNav = props => (
  <ScrollWrap><NavDesktop {...props} scroll /></ScrollWrap>
);

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktopScrollNav: false,
      mobileNavVisible: true,
      navHeight: 0
    };
    this.lastScrollValue = 0;
    this.ticking = false;
    this.onScroll = this.onScroll.bind(this);
    this.onLayout = this.onLayout.bind(this);
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
        // this.onScrollMobile(scrollY);
        // Save current scroll value
        this.lastScrollValue = scrollY;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  onLayout(e) {
    this.setState({
      navHeight: e.nativeEvent.layout.height
    });
  }

  onScrollDesktop(scrollY) {
    // Visible when scrolling up and we have scrolled past
    // 3 * nav height

    // When nav is not visible, dont show nav unless we have scrolled 3 x past nav height
    // When nav is visible, hide nav when we reach the bottom of nav
    const boundary = this.state.desktopScrollNav ? this.state.navHeight : 3 * this.state.navHeight;

    const scrolledPastBoundary = boundary < scrollY;

    const scrollingUp = scrollY < this.lastScrollValue;

    // Call setState only if state will change
    // TODO: Remove the if after upgrading to react 16 where canceling setState is possible
    if ((scrolledPastBoundary && scrollingUp) !== this.state.desktopScrollNav) {
      this.setState(prevState => (
        (scrolledPastBoundary && scrollingUp) !== prevState.desktopScrollNav
        ? { desktopScrollNav: scrolledPastBoundary && scrollingUp }
        : undefined
      ));
    }
  }

  // onScrollMobile(scrollY) {
  //   const scrollingUp = scrollY < this.lastScrollValue;

  //   // Call setState only if state will change
  //   // TODO: Remove the if after upgrading to react 16 where canceling setState is possible
  //   if (scrollingUp !== this.state.mobileNavVisible) {
  //     this.setState(prevState => (
  //       scrollingUp !== prevState.mobileNavVisible
  //       ? { mobileNavVisible: scrollingUp }
  //       : undefined
  //     ));
  //   }
  // }

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
              onLayout={this.onLayout}
            >
              {this.props.children}
            </NavDesktop>}
        />
        {
          this.state.desktopScrollNav && <Responsive
            small={null}
            medium={
              <ScrollNav
                logo={this.props.logo}
                menu={<MenuSmall {...this.props.menu.props} />}
              >
                {this.props.children}
              </ScrollNav>}
          />
        }
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

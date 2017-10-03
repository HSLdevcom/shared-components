import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash/fp/omit';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { MenuMobile } from '../Menu';
import View from '../View';
import { Responsive } from '../utils';

const Header = View.extend`
  width: 100%;
  align-items: stretch;
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { desktopScrollNav: false, mobileNavVisible: true };
    this.lastScrollValue = 0;
    this.ticking = false;
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll() {
    if (!this.ticking) {
      const scrollY = window.scrollY;
      window.requestAnimationFrame(() => {
        this.onScrollDesktop(scrollY);
        this.onScrollMobile(scrollY);
        // Save current scroll value
        this.lastScrollValue = scrollY;
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  onScrollDesktop(scrollY) {
    // Visible when scrolling up and we have scrolled past
    // 3 * nav height
    const navHeight = (this.desktopNav &&
                      this.desktopNav.offsetHeight) || 0;
    // When nav is not visible, dont show nav unless we have scrolled 3 x past nav height
    // When nav is visible, hide nav when we reach the bottom of nav
    const boundary = this.state.desktopScrollNav ? navHeight : 3 * navHeight;

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

  onScrollMobile(scrollY) {
    const scrollingUp = scrollY < this.lastScrollValue;

    // Call setState only if state will change
    // TODO: Remove the if after upgrading to react 16 where canceling setState is possible
    if (scrollingUp !== this.state.mobileNavVisible) {
      this.setState(prevState => (
        scrollingUp !== prevState.mobileNavVisible
        ? { mobileNavVisible: scrollingUp }
        : undefined
      ));
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
            >
              {this.props.children}
            </NavDesktop>}
        />
      </Header>
    );
  }
}

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

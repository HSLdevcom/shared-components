import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

import NavDesktop from './NavDesktop';
import NavMobile, { Height } from './NavMobile';
import { MenuMobile, MenuSmall } from '../Menu';
import Div from '../Div';

const NavMobileSpace = Div.extend`
  height: ${Height};
`;

const Header = styled.header`
  ${NavMobile}, ${NavMobileSpace} {
    display: none;
  }
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
    ${NavMobile}, ${NavMobileSpace} {
      display: block;
    }
    ${NavDesktop} {
      display: none;
    }
    `
  )}
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
      <Header className={this.props.className}>
        <CSSTransitionGroup
          transitionName="scroll"
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}
        >
          { this.props.menu && this.state.desktopScrollNav && <NavDesktop
            scroll
            logo={this.props.logo}
            menu={
              this.props.menu &&
              <MenuSmall {...this.props.menu.props}>
                {React.Children.map(
                  this.props.menu.props.children,
                  child => React.cloneElement(child, { small: true })
                  )
                }
              </MenuSmall>
            }
          >
            {React.Children.map(
              this.props.children,
              child => React.cloneElement(child, { textPosition: 'Bottom', small: true })
              )
            }
          </NavDesktop>
        }
        </CSSTransitionGroup>
        <NavDesktop
          navRef={(x) => { this.desktopNav = x; }}
          logo={this.props.logo}
          menu={this.props.menu}
        >
          {this.props.children}
        </NavDesktop>
        <NavMobileSpace />
        <NavMobile
          visible={this.state.mobileNavVisible}
          logo={this.props.logo}
          navRef={(x) => { this.mobileNav = x; }}
          menu={this.props.menu &&
            <MenuMobile {...this.props.menu.props}>
              {React.Children.map(
                this.props.menu.props.children,
                child => React.cloneElement(child, { textPosition: 'Bottom' })
                )
              }
            </MenuMobile>
          }
        >
          {React.Children.map(
            this.props.children,
            child => React.cloneElement(child, { textPosition: 'Right' })
            )
          }
        </NavMobile>
      </Header>
    );
  }
}

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  children: PropTypes.node
};

export default styled(Nav)``;

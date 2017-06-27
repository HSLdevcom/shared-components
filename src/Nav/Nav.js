import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

import NavDesktop from './NavDesktop';
import NavMobile, { Height } from './NavMobile';
import { MenuMobile, MenuSmall } from '../Menu';
import Div from '../Div';

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

const NavMobileSpace = Div.extend`
  height: ${Height};
`;

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { desktopScrollNav: false, mobileNavVisible: true };
    this.lastScrollValue = 0;
    // https://gist.github.com/Restuta/e400a555ba24daa396cc
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll(evt) {
    this.onScrollDesktop(evt);
    this.onScrollMobile(evt);
    // Save current scroll value
    this.lastScrollValue = evt.target.body.scrollTop;
  }

  onScrollDesktop(evt) {
    // Visible when scrolling up and we have scrolled past
    // 3 * nav height
    const navHeight = (this.desktopNav &&
                      this.desktopNav.offsetHeight) || 0;
    // When nav is not visible, dont show nav unless we have scrolled 3 x past nav height
    // When nav is visible, hide nav when we reach the bottom of nav
    const boundary = this.state.desktopScrollNav ? navHeight : 3 * navHeight;

    const scrolledPastBoundary = boundary < evt.target.body.scrollTop;

    const scrollingUp = evt.target.body.scrollTop < this.lastScrollValue;

    // Call setState only if state will change
    if ((scrolledPastBoundary && scrollingUp) !== this.state.desktopScrollNav) {
      this.setState({ desktopScrollNav: (scrolledPastBoundary && scrollingUp) });
    }
  }

  onScrollMobile(evt) {
    const scrollingUp = evt.target.body.scrollTop < this.lastScrollValue;

    // Call setState only if state will change
    if ((scrollingUp) !== this.state.mobileScrollNav) {
      this.setState({ mobileNavVisible: (scrollingUp) });
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
        {/* eslint-disable no-return-assign */}
        <NavDesktop
          navRef={x => this.desktopNav = x}
          logo={this.props.logo}
          menu={this.props.menu}
        >
          {this.props.children}
        </NavDesktop>
        <NavMobileSpace />
        <NavMobile
          visible={this.state.mobileNavVisible}
          logo={this.props.logo}
          navRef={x => this.mobileNav = x}
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
        {/* eslint-enable no-return-assign */}
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

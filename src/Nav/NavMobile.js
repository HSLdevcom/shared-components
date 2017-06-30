import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import { darken } from 'polished';

import { addClass } from '../utils';
import Span from '../Span';
import { MenuItem } from '../Menu';
import IconWithText from '../IconWithText/IconWithText';
import { Flex } from '../Wrapper';
import { Menu } from '../Icons';
import { ButtonNoStyle } from '../Button/Button';

export const Height = '64px';

const StyledNav = styled.nav`
  transition: top .20s ease-in;
  position: fixed;
  left: 0;
  right: 0;
  top: ${props => (props.visible ? 0 : `-${Height}`)};
  svg {
    fill: currentColor;
  }
  .logo svg {
    height: 2rem;
  }

  .nav-item {
    border-bottom: 2px solid ${props => darken(0.1, props.theme.primary)};
    display: flex;
    ${IconWithText} {
      padding: 1rem;
    }

    font-size: 1.25rem;
  }

  .nav-item svg {
    height: 3rem;
    width: 3rem;
  }
  .menu-item svg {
    height: 2rem;
    width: 2.5rem;
  }
  padding: 0 1.25rem;

  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}

  .menu-enter {
    overflow: hidden;
    max-height: 0vh;
  }

  .menu-enter.menu-enter-active {
    overflow: hidden;
    max-height: 100vh;
    transition: max-height .25s ease-in;
  }

  .menu-leave {
    overflow: hidden;
    max-height: 100vh;
  }

  .menu-leave.menu-leave-active {
    overflow: hidden;
    max-height: 0vh;
    transition: max-height .25s ease-in;
  }

  .menu-toggle {
    #menu-middle-1, #menu-middle-2, #menu-top, #menu-bot {
      transition: transform .25s linear;
    }
    &.open {
      #menu-middle-1 {
        transform: rotate(-45deg);
        transform-origin: center;
      }
      #menu-middle-2 {
        transform: rotate(45deg);
        transform-origin: center;
      }
      #menu-top {
        transform: translate(50%, -25px) scale(0);
      }
      #menu-bot {
        transform: translate(50%, 25px) scale(0);
      }
    }
  }

`;

const TopBar = Flex.extend`
  align-items: center;
  height: ${Height};
`;

const TopIcons = Flex.extend`
  align-items: center;
  align-self: stretch;
  .text {
    display: none;
  }
  .icon {
    margin: 0;
    line-height:0;
  }
  ${MenuItem} {
    align-self: stretch;
    margin-right: 1.75rem;
    ${IconWithText} {
      flex: 1;
      margin-top: ${props => props.theme.activatablePointerHeight || '0.6rem'};
      justify-content: center;
    }
  }
  ${ButtonNoStyle} {
    height: 2rem;
  }
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
const MenuWrapper = Flex.extend`
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: stretch;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  .menu {
    ${props => (props.height && `height: ${props.height || 0}px;`)}
  }

`;

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false, menuHeight: 0 };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, true);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, true);
  }

  onResize() {
    if (!this.menuWrapper) {
      return;
    }
    this.setState({
      menuHeight: document.body.scrollHeight -
        this.menuWrapper.getBoundingClientRect().top -
        window.pageYOffset
    });
  }

  toggleMenu() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (<StyledNav
      className={this.props.className}
      innerRef={this.props.navRef}
      visible={this.props.visible}
    >
      <TopBar>
        <Span className="logo">
          { this.props.logo }
        </Span>
        {this.props.menu && <TopIcons>
          {React.Children.map(this.props.menu.props.children, child => (
            React.cloneElement(child, { small: true })
            ))}
          <ButtonNoStyle
            onClick={this.toggleMenu}
            className={cx('menu-toggle', { open: this.state.open })}
          >
            <Menu height="3rem" />
          </ButtonNoStyle>
        </TopIcons>}
      </TopBar>
      {/* eslint-disable no-return-assign */}
      <MenuWrapper
        height={this.props.menu && this.state.menuHeight}
        innerRef={x => this.menuWrapper = x}
      >
        {/* eslint-enable no-return-assign */}
        <CSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          { this.props.menu && this.state.open && React.cloneElement(
            this.props.menu,
            { className: cx(this.props.menu.props.className, 'menu'),
              items: addClass(this.props.children, 'nav-item'),
            },
            addClass(this.props.menu.props.children, 'menu-item')
            )
          }
        </CSSTransitionGroup>
      </MenuWrapper>
    </StyledNav>);
  }
}

Nav.childContextTypes = {
  textPosition: PropTypes.string
};

Nav.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  navRef: PropTypes.func,
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired
};

export default styled(Nav)``;

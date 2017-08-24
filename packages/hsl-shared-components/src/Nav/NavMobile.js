import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import { darken } from 'polished';

import { addClass } from '../utils';
import Span from '../Span';
import { MenuItem } from '../Menu';
import IconWithText, { IconWrapper, TextWrapper } from '../IconWithText/IconWithText';
import { Flex } from '../Wrapper';
import Icons from '../Icons';
import Touchable from '../Touchable';
import View from '../View';

export const Height = '64px';

const StyledNav = styled.nav`
  transition: top .20s linear;
  position: absolute;
  top: 0;
  ${props => !props.menuOpen && `
    position: fixed;
    top: ${props.visible ? 0 : `-${Height}`};
  `}
  left: 0;
  right: 0;
  svg {
    fill: currentColor;
  }
  .logo svg {
    height: 2rem;
  }

  .nav-item {
    border-bottom: 2px solid ${props => darken(0.1, props.theme.primary || '#007ac9')};
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
    height: 0vh;
  }

  .menu-enter.menu-enter-active {
    overflow: hidden;
    height: 100vh;
    transition: height .25s ease-in;
  }

  .menu-leave {
    overflow: hidden;
    height: 100vh;
  }

  .menu-leave.menu-leave-active {
    overflow: hidden;
    height: 0vh;
    transition: height .25s ease-in;
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
  ${TextWrapper} {
    display: none;
  }
  ${IconWrapper} {
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
  .menu:not(.menu-leave):not(.menu-enter) {
    ${props => (props.height && `min-height: ${props.height || 0}px;`)}
  }

`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, menuHeight: 0 };
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
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return (<StyledNav
      className={this.props.className}
      innerRef={this.props.navRef}
      visible={this.props.visible}
      menuOpen={this.state.menuOpen}
    >
      <TopBar>
        <Span className="logo">
          { this.props.logo }
        </Span>
        {this.props.menu && <TopIcons>
          {React.Children.map(this.props.menu.props.children, child => (
            React.cloneElement(child, { small: true })
            ))}
          <Touchable onPress={this.toggleMenu}>
            <View className={cx('menu-toggle', { open: this.state.menuOpen })}>
              <Icons.Menu height="2rem" />
            </View>
          </Touchable>
        </TopIcons>}
      </TopBar>
      <MenuWrapper
        height={this.props.menu && this.state.menuHeight}
        innerRef={(x) => { this.menuWrapper = x; }}
      >
        <CSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          { this.props.menu && this.state.menuOpen && React.cloneElement(
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

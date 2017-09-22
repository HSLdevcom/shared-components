import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import A from '../Anchor';
import DropdownContainerDesktop from './DropdownContainerDesktop';
import DropdownContainerMobile from './DropdownContainerMobile';
import { NavItem } from '../Nav';
import Icons from '../Icons';
import Text from '../Typography';

import View from '../View';
import { size } from '../utils';

const Icon = <Icons.More style={{ height: '2.5rem', width: '2.5rem' }} />;

const Arrow = styled(({ open, ...rest }) => (<Icons.ArrowDown style={{ height: '0.5rem', width: '0.75rem' }} {...rest} />))`
  padding-left: ${size(8)};
  height: ${size(8)} !important;
  width: ${size(12)} !important;
  #arrow {
    transition: transform .25s linear;
    transform-origin: center;
    transform: rotate(0deg);
  }
  ${props => props.open && `
    #arrow {
      transform: rotate(-180deg);
    }
  `}
`;

const StyledView = View.extend`
  flex-direction: row;
`;

const ButtonTitle = ({ children, open, ...rest }) => (
  <StyledView {...rest}><Text>{children}</Text><Arrow open={open} /></StyledView>
);

ButtonTitle.propTypes = {
  children: PropTypes.string,
  open: PropTypes.bool
};

const ButtonNoStyle = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  line-height: 0;
  width: auto;
  height: auto;
  background: inherit;
  color: inherit;
  font: inherit;
`;

const StyledDiv = Div.extend`
  ${DropdownContainerMobile} {
    display: none;
  }
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
    ${DropdownContainerDesktop} {
      display: none;
    }
    ${DropdownContainerMobile} {
      display: block;
    }
    flex-direction: column;
    ${props.open && `background-color: ${props.theme.colors.primary.hslBlue};`}
    ${props.open && `color: ${props.theme.colors.primary.hslWhite};`}
    ${ButtonNoStyle} {
      ${props.open && 'border-bottom: 1px solid #cccccc;'}
    }
  `)};
`;

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, top: 0 };
    this.toggleDropdown = this.toggleDropdown.bind(this);
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
    if (!this.node) {
      return;
    }
    this.setState({
      top: this.node.getBoundingClientRect().bottom
    });
  }

  toggleDropdown() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <StyledDiv
        className={this.props.className}
        innerRef={(x) => { this.node = x; }}
        open={this.state.open}
      >
        <ButtonNoStyle onClick={this.toggleDropdown}>
          <NavItem
            link={<A />}
            icon={Icon}
            text={<ButtonTitle open={this.state.open}>{this.props.text}</ButtonTitle>}
            textPosition={this.props.textPosition}
            active={this.props.active}
            small={this.props.small}
          />
        </ButtonNoStyle>
        { this.state.open &&
          <span>
            <DropdownContainerDesktop top={this.state.top}>
              {this.props.children}
            </DropdownContainerDesktop>
            <DropdownContainerMobile>
              {this.props.children}
            </DropdownContainerMobile>
          </span>
        }
      </StyledDiv>
    );
  }
}

DropdownMenu.propTypes = {
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(DropdownMenu)``;

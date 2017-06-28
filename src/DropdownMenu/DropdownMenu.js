import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonNoStyle } from '../Button/Button';
import Div from '../Div';
import A from '../Anchor';
import DropdownContainerDesktop from './DropdownContainerDesktop';
import DropdownContainerMobile from './DropdownContainerMobile';
import { NavItem } from '../Nav';
import { More } from '../Icons';

const Icon = <More height="2.5rem" width="2.5rem" />;

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
    > ${ButtonNoStyle} {
      align-self: flex-start;
    }
  `)};
`;

class DropdownMenu extends React.PureComponent {
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
      top: this.node.getBoundingClientRect().bottom +
           document.body.scrollTop
    });
  }

  toggleDropdown() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    /* eslint-disable no-return-assign */
    return (
      <StyledDiv className={this.props.className} innerRef={x => this.node = x} >
        {/* eslint-enable no-return-assign */}
        <ButtonNoStyle onClick={this.toggleDropdown}>
          <NavItem
            link={<A />}
            icon={Icon}
            text={this.props.text}
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

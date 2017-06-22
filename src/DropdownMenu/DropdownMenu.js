import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonNoStyle } from '../Button/Button';
import Div from '../Div';
import A from '../Anchor';
import LargeDropdown from './LargeDropdown';
import { NavItem } from '../Nav';
import { More } from '../Icons';

const Icon = <More height="2.5rem" width="2.5rem" />;

class DropdownMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <Div className={this.props.className}>
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
        {this.state.open && <LargeDropdown>{this.props.children}</LargeDropdown>}
      </Div>
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

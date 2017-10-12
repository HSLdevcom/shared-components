import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/primitives';
import { Animated } from 'react-primitives';
import omit from 'lodash/omit';

import Icons from '../Icons';
import DropdownItem from './DropdownItem';
import View from '../View';
import { LabelText } from '../Typography';
import { size } from '../utils';
import { AView } from '../Animated';

import DropdownElement from './DropdownElement';

const StyledView = View.extend`
  width: 100%;
  padding: 0;
  align-items: stretch;
  background: ${props => props.theme.colors.primary.hslWhite};
`;

const SelectWrapper = View.extend`
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-left-width: 1px;
  border-right-width: 1px;
  z-index: ${props => props.theme.layers.contextMenu + 1}
`;

const ItemWrap = View.extend`
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-bottom-width: 1px;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

const ScrollWrap = styled(({ x, y, height, width, ...rest }) => (
  <AView {...rest} />
))`
  position: absolute;
  width: ${props => props.width}px;
  top: ${props => props.y + props.height}px;
  left: ${props => props.x}px;
  overflow: hidden;
`;

const Value = ({ items, value, noValue }) => {
  const item = items.find(x => x.value === value);
  if (item) {
    return <LabelText>{item.value}</LabelText>;
  }
  return <LabelText>{noValue}</LabelText>;
};

Value.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  noValue: PropTypes.string,
  value: PropTypes.string
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
      itemDimensions: { x: 0, y: 0, height: 0, width: 0 }
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.selectedOnLayout = this.selectedOnLayout.bind(this);
    this.dropdownHeight = 0;
  }

  onLayout(e) {
    this.dropdownHeight = e.nativeEvent.layout.height;
  }

  selectedOnLayout(e) {
    const { height, width, x, y } = e.nativeEvent.layout;
    this.setState({
      itemDimensions: { height, width, x, y }
    });
  }

  toggleDropdown() {
    if (!this.open) {
      Animated.timing(
        this.state.anim,
        { toValue: this.dropdownHeight, duration: 150 }
      ).start(() => {
        this.open = true;
      });
    } else {
      Animated.timing(
        this.state.anim,
        { toValue: 0, duration: 250 }
      ).start(() => {
        this.open = false;
      });
    }
  }

  render() {
    return (
      <StyledView
        {...omit(this.props, ['items', 'onChange', 'theme', 'value'])}
        onClick={this.toggleDropdown}
      >
        <DropdownElement>
          <DropdownItem
            onLayout={this.selectedOnLayout}
            onPress={this.toggleDropdown}
          >
            <Value
              items={this.props.items}
              value={this.props.value}
              noValue={this.props.noValue}
            />
            <Icons.ArrowDown
              height={size(12)}
              width={size(12)}
              fill={this.props.theme.colors.primary.hslBlue}
            />
          </DropdownItem>
        </DropdownElement>
        <ScrollWrap
          style={{ maxHeight: this.state.anim }}
          x={this.state.itemDimensions.x}
          y={this.state.itemDimensions.y}
          height={this.state.itemDimensions.height}
          width={this.state.itemDimensions.width}
        >
          <SelectWrapper onLayout={this.onLayout}>
            {
            this.props.items
              .map(item =>
              (
                <ItemWrap key={item.id}>
                  <DropdownItem
                    onPress={() => {
                      this.props.onChange(item.value);
                      this.toggleDropdown();
                    }}
                  >
                    <LabelText>{item.value}</LabelText>
                  </DropdownItem>
                </ItemWrap>
              )
            )
          }
          </SelectWrapper>
        </ScrollWrap>
      </StyledView>);
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  noValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.shape({
        hslBlue: PropTypes.string
      })
    })
  })
};

const DD = styled(withTheme(Dropdown))``;
DD.displayName = 'Dropdown';

export default DD;

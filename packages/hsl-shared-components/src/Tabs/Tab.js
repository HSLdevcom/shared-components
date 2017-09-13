import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import Touchable from '../Touchable';
import View from '../View';
import Text from '../Typography';
import { size } from '../utils';

const Content = styled(({ active, ...rest }) => (
  <View {...rest} />
))`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${size(16)};
  margin-horizontal: ${size(26)};
  padding-top: ${size(12)};
  justify-content: center;
  border-style: solid;
  border-color: transparent;
  border-top-width: 4px;
  ${props => props.active && `
    border-color: #017AC9;
  `}
`;

function fill(active, disabled) {
  if (disabled) {
    return '#B7B7B7';
  }
  if (active) {
    return '#000000';
  }
  return '#017AC9';
}

const StyledText = styled(({ disabled, active, children, ...rest }) => (
  <Text {...rest}>
    { children.toUpperCase() }
  </Text>
))`
  font-size: ${size(18)};
  ${props => `color: ${fill(props.active, props.disabled)};`}
`;

const StyledView = styled(({ rounded, active, first, last, ...rest }) => (
  <View {...rest} />
))`
  background: #EEF1F3;
  border-color: #CFCFCF;
  border-style: solid;
  border-right-width: 1;
  ${props => props.last && 'border-right-width: 0;'}
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  ${props => props.rounded && props.first && 'border-top-left-radius: 6;'}
  ${props => props.rounded && props.last && 'border-top-right-radius: 6;'}
  ${props => props.active && `
    border-bottom-color: transparent;
    background-color: #FFFFFF;
    `
  }
`;

const Tab = styled(({
  children,
  onPress,
  header,
  active,
  disabled,
  ...rest
}) => (
  <Touchable onPress={onPress}>
    <StyledView active={active} {...rest} accessibilityRole="button">
      <Content active={active}>
        { header.icon && React.cloneElement(header.icon, { fill: fill(active, disabled) }) }
        {
          <StyledText active={active} disabled={disabled}>{ header.text || header }</StyledText>
        }
      </Content>
    </StyledView>
  </Touchable>
))`
`
;

Tab.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    })
  ]).isRequired,
  // Validate the presence of children. Children is used in Tabs component
  children: PropTypes.node.isRequired, // eslint-disable-line react/no-unused-prop-types
  className: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool
};

export default Tab;

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
  margin-horizontal: ${size(32)};
  margin-bottom: ${size(16)};
  padding-top: ${size(12)};
  display: flex;
  justify-content: center;
  border-style: solid;
  border-color: transparent;
  border-top-width: 4px;
  ${props => props.active && `
    border-color: #017AC9;
  `}
`;

const StyledText = styled(({ disabled, active, children, ...rest }) => (
  <Text {...rest}>
    { children.toUpperCase() }
  </Text>
))`
  margin-left: ${size(16)};
  color: #017AC9;
  font-size: ${size(18)};
  ${props => props.active && `
    color: #000000;
  `}
  ${props => props.disabled && 'color: #B7B7B7;'}
`;

const StyledView = styled(({ rounded, active, first, last, ...rest }) => (
  <View {...rest} />
))`
  cursor: pointer;
  background: #EEF1F3;
  border-color: #CFCFCF;
  border-style: solid;
  border-right-width: 1;
  ${props => props.last && 'border-right-width: 0;'}
  flex: 1;
  flex-direction: row;
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
  onClick,
  header,
  active,
  disabled,
  ...rest
}) => (
  <Touchable onPress={onClick}>
    <StyledView active={active} {...rest}>
      <Content active={active}>
        { header.icon }
        <StyledText active={active} disabled={disabled}>{ header.text || header }</StyledText>
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool
};

export default Tab;

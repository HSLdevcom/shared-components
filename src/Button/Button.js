import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';
import Text from '../Typography';
import View from '../View';
import Touchable from '../Touchable';
import { size } from '../utils';

const TouchableText = styled(({ primary, secondary, disabled, small, ...rest }) => (
  <Text {...rest} />
))`
  font-size: ${props => (props.small ? size(14) : size(16))};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.primary};

  ${props => props.primary && `
    font-size: ${props.small ? size(16) : size(18)};
    color: ${props.theme.primaryText};
  `}
  ${props => props.secondary && `
    color: ${darken(0.2, props.theme.default)};
  `}
  ${props => props.disabled && `
    color: ${props.theme.default};
  `}
`;

const TouchableView = styled(({ primary, secondary, disabled, rounded, small, ...rest }) => (
  <View {...rest} />
))`
  height: ${props => (props.small ? size(36) : size(45))};
  border-radius: ${props => (props.rounded ? size(40) : size(4))};
  border-style: solid;
  border-width: 1px;
  width: 70%;
  border-color: ${props => props.theme.default};
  background-color: #fff;
  ${props => props.primary && `
    border-radius: ${size(40)};
    border-color: ${props.theme.primary};
    background-color: ${props.theme.primary};
    height: ${props.small ? size(45) : size(50)};
  `}
  ${props => props.secondary && `
    border-color: ${darken(0.2, props.theme.default)};
  `}
  ${props => props.disabled && `
    border-color: ${props.theme.default};
  `}

  ${props => props.disabled && props.primary && `
    background-color: ${lighten(0.175, props.theme.default)};
    border-color: ${lighten(0.175, props.theme.default)};
  `}
`;

const Button = styled(({
  primary,
  secondary,
  disabled,
  rounded,
  small,
  onPress,
  onLongPress,
  className,
  style,
  children }) => (
    <Touchable onPress={onPress} onLongPress={onLongPress}>
      <TouchableView
        primary={primary}
        secondary={secondary}
        disabled={disabled}
        rounded={rounded}
        small={small}
        className={className}
        style={style}
      >
        {
          React.isValidElement(children) ?
            children :
            (<TouchableText
              primary={primary}
              secondary={secondary}
              disabled={disabled}
              small={small}
            >
              {children}
            </TouchableText>)
        }
      </TouchableView>
    </Touchable>
))``;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.array  // eslint-disable-line react/forbid-prop-types
};

export default Button;

import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';
import Text from '../Typography';
import View from '../View';
import Touchable from '../Touchable';
import { size as utilsSize } from '../utils';

const sizeMap = {
  fontSize: {
    primary: {
      default: utilsSize(18),
      small: utilsSize(16)
    },
    default: {
      default: utilsSize(16),
      small: utilsSize(14)
    }
  },
  height: {
    primary: {
      default: utilsSize(50),
      small: utilsSize(45)
    },
    default: {
      default: utilsSize(45),
      small: utilsSize(36)
    }
  }
};

function size(kind, primary, small) {
  const map = primary ? sizeMap[kind].primary : sizeMap[kind].default;
  return small ? map.small : map.default;
}


const TouchableText = styled(({ primary, secondary, disabled, small, ...rest }) => (
  <Text {...rest} />
))`
  font-size: ${props => size('fontSize', props.primary, props.small)};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.primary};

  ${props => props.primary && `
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
  height: ${props => size('height', props.primary, props.small)};
  border-radius: ${props => (props.rounded ? utilsSize(40) : utilsSize(4))};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.default};
  background-color: #fff;
  ${props => props.primary && `
    border-radius: ${utilsSize(40)};
    border-color: ${props.theme.primary};
    background-color: ${props.theme.primary};
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
  innerRef,
  children,
  ...rest }) => (
    <Touchable onPress={onPress} onLongPress={onLongPress}>
      <TouchableView
        primary={primary}
        secondary={secondary}
        disabled={disabled}
        rounded={rounded}
        small={small}
        {...rest}
        innerRef={innerRef}
        accessibilityRole="button"
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
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  innerRef: PropTypes.func
};

export default Button;

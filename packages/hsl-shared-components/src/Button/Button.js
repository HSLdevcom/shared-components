import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      default: utilsSize(18),
      small: utilsSize(16)
    }
  },
  height: {
    primary: {
      default: utilsSize(50),
      small: utilsSize(45)
    },
    default: {
      default: utilsSize(50),
      small: utilsSize(45)
    }
  }
};

function size(kind, primary, small) {
  const map = primary ? sizeMap[kind].primary : sizeMap[kind].default;
  return small ? map.small : map.default;
}

const TouchableView = styled(({
  hover,
  active,
  focus,
  primary,
  success,
  secondary,
  transparent,
  small,
  square,
  noPadding,
  ...rest
}) => (
  <View {...rest} />
))`

  color: ${props => props.theme.colors.primary.hslGrey};
  font-size: ${props => size('fontSize', props.primary, props.small)};
  font-weight: 500;
  text-align: center;

  ${props => !props.noPadding && `
    padding: 0 ${utilsSize(25, true)}px;
  `}

  cursor: pointer;
  height: ${props => size('height', props.primary, props.small)};
  border-radius: ${props => (props.square ? utilsSize(4) : utilsSize(40))};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  background-color: ${props => props.theme.colors.background.hslWhite};

  ${props => props.primary && `
    color: ${props.theme.colors.background.hslWhite};
    border-radius: ${utilsSize(40)};
    border-color: ${props.theme.colors.primary.hslBlue};
    background-color: ${props.theme.colors.primary.hslBlue};
  `}
  ${props => props.primary && props.success && `
    border-color: ${props.theme.colors.primary.hslGreen};
    background-color: ${props.theme.colors.primary.hslGreen};
  `}
  ${props => !props.primary && props.square && `
    color: ${props.theme.colors.primary.hslBlue};
  `}

  &:hover {
    ${props => !props.primary && !props.disabled && `
        border-color:  ${props.theme.colors.primary.hslBlue};
    `}
    ${props => props.primary && !props.disabled && `
        border-color:  ${props.theme.colors.primary.hslBlueDark};
        background-color:  ${props.success ? props.theme.colors.primary.hslGreenDark : props.theme.colors.primary.hslBlueDark};
    `}
  }

  ${props => (props.hover) && !props.primary && `
      border-color:  ${props.theme.colors.primary.hslBlue};
  `}
  ${props => (props.hover) && props.primary && `
      background-color:  ${props.success ? props.theme.colors.primary.hslGreenDark : props.theme.colors.primary.hslBlueDark};
  `}

  ${props => props.disabled && `
    color: ${props.theme.colors.primary.hslGreyLight};
    border-color: ${props.theme.colors.background.hslGreyXLight};
    background-color: ${props.primary ? props.theme.colors.background.hslGreyXLight : props.theme.colors.background.hslWhite};
  `}

  ${props => props.transparent && `
    background-color: transparent;
  `}
`;

const Button = styled(({
  primary,
  success,
  secondary,
  disabled,
  transparent,
  square,
  small,
  noPadding,
  onPress,
  onLongPress,
  innerRef,
  children,
  ...rest }) => (
    <Touchable
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <TouchableView
        primary={primary}
        success={success}
        secondary={secondary}
        disabled={disabled}
        transparent={transparent}
        square={square}
        small={small}
        noPadding={noPadding}
        {...rest}
        innerRef={innerRef}
        accessibilityRole="button"
      >
        {children}
      </TouchableView>
    </Touchable>
))``;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  square: PropTypes.bool,
  small: PropTypes.bool,
  noPadding: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  innerRef: PropTypes.func
};

export default Button;

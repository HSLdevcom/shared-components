import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Typography';
import View from '../View';
import Touchable from '../Touchable';
import { size as utilsSize } from '../utils';
import { getTextColor, getBorderColor, getBackgroundColor } from './utils';

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

const Icon = withTheme(({
  icon,
  primary,
  disabled,
  small,
  theme,
}) =>
  React.cloneElement(icon, {
    width: size('fontSize', primary, small),
    height: size('fontSize', primary, small),
    fill: getTextColor({ primary, disabled, theme }),
  })
);

const TouchableText = styled(({
  hover,
  active,
  focus,
  primary,
  success,
  secondary,
  transparent,
  small,
  disabled,
  square,
  ...rest
}) => (
  <Text {...rest} />
))`
  color: ${props => getTextColor(props)};
  font-size: ${props => size('fontSize', props.primary, props.small)};
  font-weight: 500;
  ${props => props.icon && !props.iconAfterText && `
    margin-left: ${utilsSize(10)};
  `}
  ${props => props.icon && props.iconAfterText && `
    margin-right: ${utilsSize(10)};
  `}
`;

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
  iconAfterText,
  ...rest
}) => (
  <View {...rest} />
))`
  flex-direction: row;
  ${props => props.iconAfterText && `
    flex-direction: row-reverse;
  `}
  align-items: center;
  height: ${props => size('height', props.primary, props.small)};
  border-radius: ${props => (props.square ? utilsSize(4) : utilsSize(40))};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  ${props => props.primary && `
    border-radius: ${utilsSize(40)};
  `}
  padding-horizontal: ${utilsSize(25, true)};
`;

const Button = styled(({
  primary,
  success,
  secondary,
  disabled,
  transparent,
  square,
  small,
  icon,
  iconAfterText,
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
        iconAfterText={iconAfterText}
        {...rest}
        innerRef={innerRef}
        accessibilityRole="button"
      >
        {icon &&
          <Icon
            icon={icon}
            primary={primary}
            disabled={disabled}
            small={small}
          />
        }
        {
          React.isValidElement(children) ?
            children :
            (<TouchableText
              primary={primary}
              success={success}
              secondary={secondary}
              disabled={disabled}
              transparent={transparent}
              square={square}
              icon={!!icon}
              iconAfterText={iconAfterText}
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
  success: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  square: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.element,
  iconAfterText: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  innerRef: PropTypes.func
};

export default Button;

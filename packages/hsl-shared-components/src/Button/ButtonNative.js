import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Typography';
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

const StyledText = styled(({
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
  iconAfterText,
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

const Container = styled(({
  hover,
  active,
  focus,
  primary,
  success,
  secondary,
  inverted,
  transparent,
  small,
  square,
  iconAfterText,
  noPadding,
  ...rest
}) => (
  <Touchable {...rest} />
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
  inverted,
  hover,
  active,
  focus,
  disabled,
  transparent,
  square,
  small,
  icon,
  iconAfterText,
  onClick,
  onPress,
  onLongPress,
  innerRef,
  children,
  theme,
  ...rest
}) => {
  const hasValidChildren = React.isValidElement(children);
  return (
    <Container
      onPress={onPress || onClick}
      onLongPress={onLongPress}
      pressedStyle={{
        borderColor: getBorderColor({
          active: true, primary, success, secondary, inverted, disabled, theme
        }),
        backgroundColor: getBackgroundColor({
          active: true, primary, success, secondary, inverted, disabled, theme
        }),
      }}
      active={active}
      hover={hover}
      focus={focus}
      primary={primary}
      success={success}
      secondary={secondary}
      inverted={inverted}
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
      {hasValidChildren && children}
      {!hasValidChildren &&
          (<StyledText
            hover={hover}
            active={active}
            focus={focus}
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
          </StyledText>)
      }
    </Container>
  );
})``;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  inverted: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  square: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.element,
  iconAfterText: PropTypes.bool,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  innerRef: PropTypes.func
};

Button.displayName = 'Button';

export default withTheme(Button);

import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import View from '../View';
import Text from '../Typography';
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

const Container = styled(({
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
  color: ${props => getTextColor(props)};
  font-size: ${props => size('fontSize', props.primary, props.small)};
  font-weight: 500;
  text-align: center;
  ${props => !props.noPadding && `
    padding: 0 ${utilsSize(25, true)}px;
  `}
  cursor: pointer;

  flex-direction: row;
  height: ${props => size('height', props.primary, props.small)};
  border-radius: ${props => (props.square ? utilsSize(4) : utilsSize(40))};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};

  ${props => props.primary && `
    border-radius: ${utilsSize(40)};
  `}

  &:hover {
    border-color:  ${props => getBorderColor(props, { hover: true })};
    background-color: ${props => getBackgroundColor(props, { hover: true })};
  }
`;

const Icon = withTheme(({
  icon,
  primary,
  disabled,
  theme,
}) =>
  React.cloneElement(icon, {
    width: utilsSize(20),
    height: utilsSize(20),
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
  disabled,
  small,
  ...rest,
}) =>
  (<Text {...rest} />)
)`
  color: ${props => getTextColor(props)};
  font-size: ${props => size('fontSize', props.primary, props.small)};
  font-weight: 500;
  ${props => props.icon && `
    margin-left: ${utilsSize(10)};
  `}
`;

const Button = styled(({
  hover,
  active,
  focus,
  primary,
  success,
  secondary,
  disabled,
  transparent,
  icon,
  square,
  small,
  noPadding,
  onClick,
  onPress,
  onLongPress,
  innerRef,
  children,
  ...rest }) => (
    <Container
      hover={hover}
      active={active}
      focus={focus}
      primary={primary}
      success={success}
      secondary={secondary}
      disabled={disabled}
      transparent={transparent}
      square={square}
      small={small}
      noPadding={noPadding}
      onClick={onPress || onClick}
      accessibilityRole="button"
      {...rest}
      innerRef={innerRef}
    >
      {icon &&
        <Icon
          icon={icon}
          primary={primary}
          disabled={disabled}
          square={square}
        />
      }
      {React.isValidElement(children) && children}
      {!React.isValidElement(children) &&
        <StyledText
          hover={hover}
          active={active}
          focus={focus}
          primary={primary}
          success={success}
          secondary={secondary}
          icon={!!icon}
          disabled={disabled}
          small={small}
        >
          {children}
        </StyledText>}
    </Container>
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
  noPadding: PropTypes.bool,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node,
  innerRef: PropTypes.func
};

export default Button;

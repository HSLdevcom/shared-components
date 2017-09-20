import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import Text from '../Typography';
import Touchable from '../Touchable';
import View from '../View';
import { size as utilsSize, IS_NATIVE } from '../utils';

const sizeMap = {
  button: {
    default: utilsSize(54),
    small: utilsSize(48)
  },
  icon: {
    default: utilsSize(42),
    small: utilsSize(32)
  },
  padding: {
    default: utilsSize(7),
    small: utilsSize(5)
  },
  margin: {
    default: utilsSize(15),
    small: utilsSize(15)
  }
};

function size(kind, small) {
  const map = sizeMap[kind];
  return small ? map.small : map.default;
}

const IconContainer = styled(({ small, bgColor, ...rest }) => (
  <View {...rest} />
))`
  width: ${props => size('button', props.small)};
  height: ${props => size('button', props.small)};
  margin-right: ${props => size('margin', props.small)};
  padding-vertical: ${props => size('padding', props.small)};
  padding-horizontal: ${props => size('padding', props.small)};
  background-color: ${props => props.theme.colors.primary.hslBlue};
  ${props => props.bgColor && `
    background-color: ${props.bgColor};
  `}
  border-radius: 4px;
`;

const Caption = styled(({ small, ...rest }) => (
  <Text {...rest} />
))`
  color: ${props => props.theme.colors.primary.hslBlue};
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
  rounded,
  ...rest
}) => (
  <View {...rest} />
))`
  height: ${props => size('button', props.small)};
  border-style: solid; /* Android touchable fix */
  border-width: 1px; /* Android touchable fix */
  border-color: transparent; /* Android touchable fix */
  flex-direction: row;
  justify-content: flex-start;
`;

const ButtonWithText = styled(({ small, text, icon, bgColor, onPress, onLongPress }) => (
  <Touchable onPress={onPress} onLongPress={onLongPress}>
    <TouchableView accessibilityRole="button">
      <IconContainer small={small} bgColor={bgColor}>
        {
          React.cloneElement(
            icon,
            {
              width: IS_NATIVE ? parseInt(size('icon', small), 10) : '100%', // note: native doesnt work with dynamic props
              height: IS_NATIVE ? parseInt(size('icon', small), 10) : '100%',
            }
          )
        }
      </IconContainer>
      <Caption>{text}</Caption>
    </TouchableView>
  </Touchable>
))``;

ButtonWithText.propTypes = {
  icon: PropTypes.element,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  small: PropTypes.bool
};

ButtonWithText.displayName = 'ButtonWithText';

export default ButtonWithText;

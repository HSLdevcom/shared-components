import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Typography';
import Touchable from '../Touchable';
import View from '../View';
import { size as utilsSize } from '../utils';

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
  color: ${props => props.theme.font.colors.highlight};
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
  theme,
  ...rest
}) => (
  <Touchable {...rest} />
))`
  height: ${props => size('button', props.small)};
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  flex-direction: row;
  justify-content: flex-start;
`;

const ButtonWithText = styled(({
  small,
  text,
  icon,
  bgColor,
  onPress,
  onLongPress,
  theme,
}) => (
  <TouchableView onPress={onPress} onLongPress={onLongPress} accessibilityRole="button">
    <IconContainer small={small} bgColor={bgColor}>
      {
        React.cloneElement(
          icon,
          {
            height: size('icon', small),
            width: size('icon', small),
            fill: icon.props.fill ? icon.props.fill : theme.colors.primary.hslWhite,
          })
      }
    </IconContainer>
    <Caption>{text}</Caption>
  </TouchableView>
))``;

ButtonWithText.propTypes = {
  icon: PropTypes.element,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  small: PropTypes.bool
};

ButtonWithText.displayName = 'ButtonWithText';

export default withTheme(ButtonWithText);

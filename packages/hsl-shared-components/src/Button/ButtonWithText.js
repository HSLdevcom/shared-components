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
  margin: {
    default: utilsSize(20),
    small: utilsSize(15)
  }
};

function size(kind, small) {
  const map = sizeMap[kind];
  return small ? map.small : map.default;
}

const Icon = styled(({ small, ...rest }) => (
  <View {...rest} />
))`
  height: ${props => size('icon', props.small)};
  width: ${props => size('icon', props.small)};
  align-items: stretch;
`;

const StyledText = Text.extend`
  color: ${props => props.theme.primary};
  flex: 1;
`;

const StyledView = View.extend`
  flex-direction: row;
`;

const ButtonWithText = styled(({ small, text, icon, onPress, ...rest }) => (
  <Touchable onPress={onPress}>
    <StyledView accessibilityRole="button">
      <View {...rest}>
        <Icon small={small}>
          {
            React.cloneElement(
              icon,
              {
                style: { flex: 1 },
                width: IS_NATIVE ? parseInt(size('icon', small), 10) : '100%'// note: native doesnt work with dynamic props
              }
            )
          }
        </Icon>
      </View>
      <StyledText>{text}</StyledText>
    </StyledView>
  </Touchable>
))`
  height: ${props => size('button', props.small)};
  width: ${props => size('button', props.small)};
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  margin-right: ${props => size('margin', props.small)};
  flex-grow: 0;
  flex-shrink: 0;

`;

ButtonWithText.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  small: PropTypes.bool
};

ButtonWithText.displayName = 'ButtonWithText';

export default ButtonWithText;

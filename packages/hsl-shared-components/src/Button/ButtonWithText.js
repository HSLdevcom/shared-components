import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import Text from '../Typography';
import Touchable from '../Touchable';
import View from '../View';
import { size as utilsSize, IS_NATIVE } from '../utils';

const sizeMap = {
  button: {
    large: utilsSize(86),
    default: utilsSize(54),
    small: utilsSize(48)
  },
  icon: {
    large: utilsSize(67),
    default: utilsSize(42),
    small: utilsSize(32)
  },
  text: {
    large: 1.75,
    default: 1.125,
    small: 1
  },
  margin: {
    large: utilsSize(33),
    default: utilsSize(20),
    small: utilsSize(15)
  }
};

function size(kind, large, small) {
  const map = sizeMap[kind];
  if (large) {
    return map.large;
  }
  if (small) {
    return map.small;
  }
  return map.default;
}

const Icon = styled(({ large, small, ...rest }) => (
  <View {...rest} />
))`
  height: ${props => size('icon', props.large, props.small)};
  width: ${props => size('icon', props.large, props.small)};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(({ large, small, ...rest }) => (
  <Text {...rest} size={size('text', large, small)} />
))`
  color: ${props => props.theme.primary};
`;

const StyledView = View.extend`
  flex-direction: row;
`;

const ButtonWithText = styled(({ large, small, text, icon, onPress, ...rest }) => (
  <Touchable onPress={onPress}>
    <StyledView>
      <View {...rest}>
        <Icon large={large} small={small}>
          {
            React.cloneElement(
              icon,
              {
                height: IS_NATIVE ? parseInt(size('icon', large, small), 10) : '100%', // note: native doesnt work with dynamic props
                width: IS_NATIVE ? parseInt(size('icon', large, small), 10) : '100%'
              }
            )
          }
        </Icon>
      </View>
      <StyledText large={large} small={small}>{text}</StyledText>
    </StyledView>
  </Touchable>
))`
  height: ${props => size('button', props.large, props.small)};
  width: ${props => size('button', props.large, props.small)};
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  margin-right: ${props => size('margin', props.large, props.small)};
`;

ButtonWithText.propTypes = {
  large: PropTypes.bool,
  icon: PropTypes.element,
  text: PropTypes.string,
  small: PropTypes.bool
};

ButtonWithText.displayName = 'ButtonWithText';

export default ButtonWithText;

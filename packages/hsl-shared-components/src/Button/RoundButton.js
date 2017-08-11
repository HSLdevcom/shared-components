import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import Button from '../Button';
import View from '../View';
import { size as utilsSize } from '../utils';

const sizeMap = {
  button: {
    large: utilsSize(80),
    default: utilsSize(60),
    small: utilsSize(50)
  },
  icon: {
    large: utilsSize(36),
    default: utilsSize(25),
    small: utilsSize(20)
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

const StyledView = styled(({ large, small, ...rest }) => (
  <View {...rest} />
))`
  height: ${props => size('icon', props.large, props.small)};
  width: ${props => size('icon', props.large, props.small)};
`;

const RoundButton = styled(({ children, large, small, ...rest }) => (
  <Button
    rounded
    {...rest}
  >
    <StyledView large={large} small={small}>
      {
        children
      }
    </StyledView>
  </Button>
))`
  height: ${props => size('button', props.large, props.small)};
  width: ${props => size('button', props.large, props.small)};
`;

RoundButton.propTypes = {
  children: PropTypes.element,
  large: PropTypes.bool,
  small: PropTypes.bool
};

RoundButton.displayName = 'RoundButton';

export default RoundButton;

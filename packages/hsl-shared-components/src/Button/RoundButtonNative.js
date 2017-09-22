import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import Button from './ButtonNative';
import View from '../View';
import { size as utilsSize } from '../utils';

const sizeMap = {
  button: {
    default: utilsSize(60),
    small: utilsSize(50)
  },
  icon: {
    default: utilsSize(25),
    small: utilsSize(20)
  }
};

function size(kind, small) {
  const map = sizeMap[kind];
  return small ? map.small : map.default;
}

const StyledView = styled(({ small, ...rest }) => (
  <View {...rest} />
))`
  height: ${props => size('icon', props.small)};
  width: ${props => size('icon', props.small)};
`;

const RoundButton = styled(({ children, small, ...rest }) => (
  <Button
    secondary
    {...rest}
  >
    <StyledView small={small}>
      {
        children
      }
    </StyledView>
  </Button>
))`
  height: ${props => size('button', props.small)};
  width: ${props => size('button', props.small)};
`;

RoundButton.propTypes = {
  children: PropTypes.element,
  small: PropTypes.bool
};

RoundButton.displayName = 'RoundButton';

export default RoundButton;

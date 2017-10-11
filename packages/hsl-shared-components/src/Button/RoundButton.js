import React from 'react';
import styled from 'styled-brimitives';
import PropTypes from 'prop-types';
import Button from './Button';
import View from '../View';
import { size as utilsSize } from '../utils';

const sizeMap = {
  button: {
    default: utilsSize(50),
    small: utilsSize(45)
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
    small={small}
    noPadding
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

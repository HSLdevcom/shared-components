import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
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

const RoundButton = styled(({ children, small, theme, ...rest }) => (
  <Button
    secondary
    small={small}
    {...rest}
  >
    {
      React.cloneElement(
        children,
        {
          height: size('icon', small),
          width: size('icon', small),
          fill: children.props.fill ? children.props.fill : theme.colors.primary.hslBlue,
        })
    }
  </Button>
))`
  padding-horizontal: 0px;
  padding-vertical: 0px;
  height: ${props => size('button', props.small)};
  width: ${props => size('button', props.small)};
`;

RoundButton.propTypes = {
  children: PropTypes.element,
  small: PropTypes.bool
};

RoundButton.displayName = 'RoundButton';

export default withTheme(RoundButton);

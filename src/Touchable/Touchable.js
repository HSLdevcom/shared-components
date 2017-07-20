import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from '../Typography';

const Element = styled.Touchable``;

const Touchable = ({ onPress, onLongPress, children, ...rest }) => (
  <Element onPress={onPress} onLongPress={onLongPress}>
    { React.isValidElement(children) ?
      children :
      (<Text {...rest}>{children}</Text>)
    }
  </Element>
);

Touchable.propTypes = {
  className: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node
};

export default Touchable;

import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from '../Typography';

const Touchable = styled.Touchable``;

const Element = ({ onPress, onLongPress, children, ...rest }) => (
  <Touchable onPress={onPress} onLongPress={onLongPress}>
    { React.isValidElement(children) ?
      children :
      (<Text {...rest}>{children}</Text>)
    }
  </Touchable>
);

Element.propTypes = {
  className: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node
};

export default Element;

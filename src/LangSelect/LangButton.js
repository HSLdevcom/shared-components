import React from 'react';
import styled from 'styled-components/primitives';
import View from '../View';
import Touchable from '../Touchable';
import { size } from '../utils';

const LangButton = styled(({ children, onPress, onLongPress, ...rest }) => (
  <Touchable onPress={onPress} onLongPress={onLongPress}>
    <View {...rest}>
      { children }
    </View>
  </Touchable>
))`
  border-radius: 3px;
  width: ${size(32)};
  height: ${size(24)};
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;


export default LangButton;

import React from 'react';
import styled from 'styled-components/primitives';
import View from '../View';
import Touchable from '../Touchable';
import { IS_NATIVE } from '../utils';

const DropdownItem = styled(({ children, onPress, onLongPress, ...rest }) => (
  <Touchable onPress={onPress} onLongPress={onLongPress}>
    <View {...rest}>
      { children }
    </View>
  </Touchable>
))`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  justify-content: space-between;
  flex-direction: row;
  ${!IS_NATIVE && 'cursor: pointer;'}
`;


export default DropdownItem;

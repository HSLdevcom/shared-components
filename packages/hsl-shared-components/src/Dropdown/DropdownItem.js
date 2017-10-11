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
  margin-horizontal: 20px;
  margin-vertical: 15px;
  justify-content: space-between;
  flex-direction: row;
  ${!IS_NATIVE && 'cursor: pointer;'}
`;


export default DropdownItem;

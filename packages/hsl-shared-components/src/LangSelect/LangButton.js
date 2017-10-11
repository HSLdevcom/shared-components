import React from 'react';
import styled from 'styled-brimitives';
import View from '../View';
import Touchable from '../Touchable';
import { size } from '../utils';

const TouchableView = styled(({ active, children, ...rest }) => (
  <View {...rest}>
    {children}
  </View>
))``;

const LangButton = styled(({ children, onPress, onLongPress, ...rest }) => (
  <Touchable onPress={onPress} onLongPress={onLongPress}>
    <TouchableView {...rest}>
      { children }
    </TouchableView>
  </Touchable>
))`
  border-radius: 3px;
  width: ${size(32)};
  height: ${size(24)};
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && `background-color: ${props.theme.colors.primary.hslBlueDark};`)}
`;


export default LangButton;

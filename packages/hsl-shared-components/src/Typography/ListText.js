import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import View from '../View';
import { size } from '../utils';

const Dot = View.extend`
  background-color: black;
  width: ${size(7)};
  height: ${size(7)};
  border-radius: ${size(1000)};
  margin-right: ${size(20)};
`;

const StyledText = Text.extend`
  font-weight: 300;
  font-size: ${size(16)};
  line-height: 16;
`;

const ListText = styled(({ children, ...rest }) => (
  <View {...rest}>
    <Dot />
    <StyledText>{children}</StyledText>
  </View>
))`
  flex-direction: row;
  justify-content: flex-start;

`;

export default ListText;

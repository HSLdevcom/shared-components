import React from 'react';
import View from '../View';
import { H4 } from '../Typography';
import Touchable from '../Touchable';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const Caption = H4.extend`
  color: ${props => props.theme.font.colors.highlight};
`;

const FaqButton = (
  onPress,
  onLongPress,
  ...rest
) => {
  return (
    <Touchable
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Container {...rest}>
        <Caption>Foobar</Caption>
      </Container>
    </Touchable>
  )
};

FaqButton.displayName = 'FaqButton';

export default FaqButton;

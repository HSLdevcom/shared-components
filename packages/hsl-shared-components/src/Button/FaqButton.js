import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H4 } from '../Typography';
import Touchable from '../Touchable';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import ArrowUp from '../Icons/ArrowUp';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const Caption = H4.extend`
  color: ${props => props.theme.font.colors.highlight};
`;

// const ArrowRigh = styled(() =>
//   <ArrowLeft height="15px" width="15px" fill={theme.font.colors.highlight} />
// )``;

const FaqButton = styled(({
  onPress,
  onLongPress,
  theme,
  ...rest,
}) => {
  return (
    <Touchable
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Container>
        <Caption>Foobar</Caption>
        <ArrowRight height="15" width="15" fill={theme.font.colors.highlight} />
        <ArrowLeft height="15" width="15" fill={theme.font.colors.highlight} />
        <ArrowUp height="15" width="15" fill={theme.font.colors.highlight} />
      </Container>
    </Touchable>
  );
})``;

FaqButton.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    font: {
      highlight: PropTypes.string,
    }
  }),
};

FaqButton.displayName = 'FaqButton';

export default withTheme(FaqButton);

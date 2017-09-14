import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import View from '../View';
import { size } from '../utils';

// Center Dot in middle of the of the first line
// (ListText line height - dot height) / 2
const VERTICAL_MARGIN = (16 - 7) / 2;

const Dot = View.extend`
  background-color: ${props => props.theme.colors.primary.hslGreyDark};
  margin-vertical: ${size(VERTICAL_MARGIN)}
  width: ${size(7)};
  height: ${size(7)};
  border-radius: ${size(1000)};
  margin-right: ${size(20)};
`;

const StyledText = Text.extend`
  font-weight: 300;
  font-size: ${size(16)};
  line-height: ${16};
  flex: 1;
`;


const ListText = styled(({ children, ...rest }) => (
  <View {...rest}>
    <Dot />
    <StyledText>{children}</StyledText>
  </View>
))`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

ListText.propTypes = {
  children: PropTypes.string
};

export default ListText;

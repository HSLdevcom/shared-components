import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import View from '../View';
import { size as utilsSize } from '../utils';

// Center Dot in middle of the of the first line
// (ListText line height - dot height) / 2
const VERTICAL_MARGIN = (16 - 7) / 2;

const Dot = styled(({ size, ...rest }) => (
  <View {...rest} />
))`
  background-color: black;
  margin-vertical: ${props => utilsSize(VERTICAL_MARGIN * (props.size || 1))}
  width: ${props => utilsSize(7 * (props.size || 1))};
  height: ${props => utilsSize(7 * (props.size || 1))};
  border-radius: ${utilsSize(1000)};
  margin-right: ${props => utilsSize(20 * (props.size || 1))};
`;

const StyledText = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(16 * (props.size || 1))};
  line-height: ${props => 16 * (props.size || 1)};
  flex: 1;
`;


const ListText = styled(({ size, children, ...rest }) => (
  <View {...rest}>
    <Dot size={size} />
    <StyledText size={size}>{children}</StyledText>
  </View>
))`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

ListText.propTypes = {
  size: PropTypes.number,
  children: PropTypes.string
};

export default ListText;

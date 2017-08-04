import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import View from '../View';
import { size as utilsSize } from '../utils';

const Dot = styled(({ size, ...rest }) => (
  <View {...rest} />
))`
  background-color: black;
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
`;


const ListText = styled(({ size, children, ...rest }) => (
  <View {...rest}>
    <Dot size={size} />
    <StyledText size={size}>{children}</StyledText>
  </View>
))`
  flex-direction: row;
  justify-content: flex-start;

`;

ListText.propTypes = {
  size: PropTypes.number,
  children: PropTypes.string
};

export default ListText;

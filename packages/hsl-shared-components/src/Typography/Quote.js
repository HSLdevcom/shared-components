import styled from 'styled-components/primitives';
import React from 'react';
import PropTypes from 'prop-types';

import { size as utilsSize } from '../utils';
import Text from './Text';

const View = styled.View`
  border-style: solid;
  border-left-width: 3px;
  border-left-color: #b7b7b7;
`;

const Quote = styled(({ size, ...rest }) => (
  <Text {...rest} />
))`
  font-weight: 300;
  font-size: ${props => utilsSize(20 * (props.size || 1))};
  line-height: ${props => 25 * (props.size || 1)};
  font-style: italic;
  padding: 3px 0px 3px 20px;
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

const QuoteBlock = ({ size, children, ...rest }) => (
  <View {...rest}>
    <Quote size={size}>
      {children}
    </Quote>
  </View>
);

QuoteBlock.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node
};

export default QuoteBlock;

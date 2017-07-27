import styled from 'styled-components/primitives';
import React from 'react';
import PropTypes from 'prop-types';

import { size } from '../utils';
import Text from './Text';

const View = styled.View`
  border-style: solid;
  border-left-width: 3px;
  border-left-color: #b7b7b7;
`;

const Quote = Text.extend`
  font-size: ${size(20)};
  font-style: italic;
  line-height: 25;
  font-weight: 300;
  padding: 3px 0px 3px 20px;
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

const QuoteBlock = ({ className, children }) => (
  <View className={className}>
    <Quote>
      {children}
    </Quote>
  </View>
);

QuoteBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default QuoteBlock;
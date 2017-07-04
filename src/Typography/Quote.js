import styled from 'styled-components/primitives';
import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

const View = styled.View`
  border-left-style: solid;
  border-left-width: 3px;
  border-left-color: #b7b7b7;
`;

const Quote = Text.extend`
  font-size: 20px;
  font-style: italic;
  line-height: calc(1.25 * 20px);
  text-align: left;
  font-weight: 300;
  padding: 3px 0px 3px 20px;
  font-family: "Gotham XNarrow SSm A, Gotham XNarrow SSm B, Arial, Georgia, Serif";
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

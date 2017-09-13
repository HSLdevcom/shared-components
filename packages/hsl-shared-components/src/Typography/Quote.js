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
  font-weight: 300;
  font-size: ${size(20)};
  line-height: ${25};
  font-style: italic;
  padding: 3px 0px 3px 20px;
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

const QuoteBlock = ({ children, ...rest }) => (
  <View {...rest}>
    <Quote>
      {children}
    </Quote>
  </View>
);

QuoteBlock.propTypes = {
  children: PropTypes.node
};

export default QuoteBlock;

import styled from 'styled-brimitives';
import React from 'react';
import PropTypes from 'prop-types';

import { size, relativeLineHeight } from '../utils';
import Text from './Text';

const View = styled.View`
  border-style: solid;
  border-left-width: 3px;
  border-left-color: ${props => props.theme.colors.primary.hslGreyLight};
`;

const Quote = Text.extend`
  font-weight: 300;
  font-size: ${size(18)};
  line-height: ${relativeLineHeight(18, 1.25)};
  font-style: italic;
  padding: 3px 0px 3px 20px;
  font-family: ${props => props.theme.font.familyNarrow};
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

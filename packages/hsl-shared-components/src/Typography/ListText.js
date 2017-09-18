import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import View from '../View';
import { IS_NATIVE, size, relativeLineHeight } from '../utils';

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
  ${props => props.type === 'circle' && `
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
`;

const StyledText = Text.extend`
  ${props => !props.small && `
    font-size: ${size(16)}
    line-height: ${relativeLineHeight(16, 1.00)};
  `}
  ${props => (props.small || IS_NATIVE) && `
    font-size: ${size(14)}
    line-height: ${relativeLineHeight(14, 1.14)};
  `}
  font-weight: 300;
  flex: 1;
`;


const ListText = styled(({ children, small, type, ...rest }) => (
  <View {...rest}>
    <Dot type={type} />
    <StyledText small={small}>{children}</StyledText>
  </View>
))`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

ListText.propTypes = {
  children: PropTypes.string,
  small: PropTypes.bool,
  type: PropTypes.string,
};

export default ListText;

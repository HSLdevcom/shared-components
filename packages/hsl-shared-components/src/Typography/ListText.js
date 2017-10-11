import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import View from '../View';
import { IS_NATIVE, size, relativeLineHeight } from '../utils';

const Dot = Text.extend`
  font-size: ${size(20)};
  ${props => props.type === 'circle' && `
    color: ${props.theme.colors.primary.hslBlue};
  `}
  ${props => !props.small && `
    margin-right: ${size(13)};
    line-height: ${relativeLineHeight(16, 1.00)};
  `}
  ${props => (props.small || IS_NATIVE) && `
    margin-right: ${size(10)};
    line-height: ${relativeLineHeight(14, 1.14)};
  `}
`;

const StyledText = Text.extend`
  ${props => !props.small && `
    font-size: ${size(16)};
    line-height: ${relativeLineHeight(16, 1.00)};
  `}
  ${props => (props.small || IS_NATIVE) && `
    font-size: ${size(14)};
    line-height: ${relativeLineHeight(14, 1.00)};
  `}
  font-weight: 300;
  flex: 1;
`;

const ListText = styled(({ children, small, type, ...rest }) => (
  <View {...rest}>
    <Dot type={type} small={small}>{type === 'circle' ? '○' : '●'}</Dot>
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

ListText.displayName = 'ListText';

export default ListText;

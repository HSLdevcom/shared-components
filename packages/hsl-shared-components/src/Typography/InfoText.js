import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { size, relativeLineHeight } from '../utils';

const InfoText = styled(({ large, ...rest }) => (
  <Text {...rest} />
))`
  font-size: ${size(16)};
  ${props => !props.strong && `
    font-weight: 300;
    color: ${props.theme.colors.secondary.hslPurple};
    line-height: ${relativeLineHeight(16, 1.0)};
  `}
  ${props => props.strong && `
    font-weight: 500;
    color: ${props.theme.colors.secondary.hslOrange};
    line-height: ${relativeLineHeight(16, 0.89)};
  `}

`;

InfoText.propTypes = {
  size: PropTypes.number,
  strong: PropTypes.bool
};

export default InfoText;

import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import Text from './Text';
import { IS_NATIVE, size, relativeLineHeight } from '../utils';

const InfoText = styled(({ ...rest }) => (
  <Text {...rest} />
))`
  ${props => !props.strong && `
    color: ${props.theme.colors.secondary.hslPurple};
    font-weight: 300;
    font-size: ${props.small || IS_NATIVE ? size(14) : size(16)}
    line-height: ${
      props.small ? relativeLineHeight(16, 1.14)
      : relativeLineHeight(16, 1.0)};
    `}
  }
  ${props => props.strong && `
    color: ${props.theme.colors.secondary.hslOrange};
    font-weight: 500;
    font-size: ${props.small || IS_NATIVE ? size(14) : size(16)}
    line-height: ${
      props.small || IS_NATIVE ? relativeLineHeight(16, 1.00)
      : relativeLineHeight(16, 0.89)};
    `}
  }
`;

InfoText.propTypes = {
  small: PropTypes.bool,
  strong: PropTypes.bool
};

InfoText.displayName = 'InfoText';

export default InfoText;

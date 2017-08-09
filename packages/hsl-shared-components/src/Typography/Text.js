import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size as utilsSize } from '../utils';

const Txt = styled.Text``;

const Text = styled(({ size, ...rest }) => (
  <Txt {...rest} />
))`
  font-size: ${props => utilsSize(16 * (props.size || 1))};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
`;

Text.propTypes = {
  size: PropTypes.number
};

export default Text;

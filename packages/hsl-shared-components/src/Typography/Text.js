import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size } from '../utils';

const Text = styled.Text`
  font-size: ${size(16)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
`;

Text.propTypes = {
  size: PropTypes.number
};

export default Text;

import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size } from '../utils';

const Text = styled.Text`
  color: ${props => props.theme.colors.primary.hslGreyDark};
  font-size: ${size(14)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
`;

Text.propTypes = {
  size: PropTypes.number
};

export default Text;

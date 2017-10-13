import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size } from '../utils';

const Text = styled.Text`
  color: ${props => props.theme.font.colors.default};
  font-size: ${props => size(props.theme.font.size)};
  font-weight: ${props => props.theme.font.weight};
  font-family: ${props => props.theme.font.family};
`;

Text.propTypes = {
  size: PropTypes.number
};

Text.displayName = 'Text';

export default Text;

import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size } from '../utils';

const Text = styled.Text`
  /*
    props.theme.colors is undefined in test environment, hence following conditional
    TODO: Fix the test and remove condition
  */
  ${props => `color: ${props.theme.font.color.default}`};
  font-size: ${size(14)};
  ${props => `font-family: ${props.theme.font.family};`}
`;

Text.propTypes = {
  size: PropTypes.number
};

export default Text;

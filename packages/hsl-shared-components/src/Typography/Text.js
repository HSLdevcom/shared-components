import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

import { size } from '../utils';

const Text = styled.Text`
  /*
    props.theme.colors is undefined in test environment, hence following conditional
    TODO: Fix the test and remove condition
  */
  ${props => props.theme.colors && `color: ${props.theme.colors.primary.hslGreyDark}`};
  font-size: ${size(14)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
`;

Text.propTypes = {
  size: PropTypes.number
};

export default Text;

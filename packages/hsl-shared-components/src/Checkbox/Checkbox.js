import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import View from '../View';
import Touchable from '../Touchable';
import Icons from '../Icons';
import { size } from '../utils';


export const Box = View.extend`
  height: ${size(20)};
  width: ${size(20)};
  border-radius: ${size(4)};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.primary};
`;

const Checkmark = withTheme(({ theme }) => (
  <Icons.Checkmark fill={theme.primary} height={20} width={20} />
));

const Checkbox = styled(({
  checked,
  onPress,
  ...rest }) => (
    <Touchable onPress={onPress}>
      <Box {...rest}>
        { checked && <Checkmark />}
      </Box>
    </Touchable>
))``;


Checkbox.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onPress: PropTypes.func,
  innerRef: PropTypes.func
};

export default Checkbox;

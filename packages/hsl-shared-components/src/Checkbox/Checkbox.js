import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import View from '../View';
import { LabelText } from '../Typography';
import Touchable from '../Touchable';
import Icons from '../Icons';
import { size } from '../utils';


export const Box = View.extend`
  height: ${size(20)};
  width: ${size(20)};
  border-radius: ${size(4)};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.misc.greyLight};
  ${props => props.checked && `
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
  ${props => props.error && `
    border-color: ${props.theme.colors.misc.error};
    background-color: ${props.theme.colors.misc.errorBackground};
  `}
`;

const StyledLabelText = LabelText.extend`
  margin-left: ${size(20)};
`;

const Checkmark = withTheme(({ theme }) => (
  <Icons.Checkmark fill={theme.primary} height={20} width={20} />
));

const Checkbox = styled(({
  checked,
  error,
  onPress,
  title,
  ...rest }) => (
    <Touchable onPress={onPress}>
      <View
        {...rest}
        role="checkbox"
        aria-checked={checked ? 'true' : 'false'}
        tabIndex="0"
      >
        <Box checked={checked} error={error}>
          { checked && <Checkmark />}
        </Box>
        { title && <StyledLabelText>{title}</StyledLabelText> }
      </View>
    </Touchable>
))`
  flex-direction: row;
`;


Checkbox.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onPress: PropTypes.func,
  innerRef: PropTypes.func,
  title: PropTypes.string
};

export default Checkbox;
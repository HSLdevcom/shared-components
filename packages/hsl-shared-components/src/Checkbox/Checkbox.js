import React from 'react';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import View from '../View';
import { LabelText } from '../Typography';
import Touchable from '../Touchable';
import Icons from '../Icons';
import { size } from '../utils';

const getCheckColor = (props) => {
  if (props.disabled) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.error) {
    return props.theme.error.color.primary;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.colors.primary.hslBlue;
};

const getTextColor = (props) => {
  if (props.disabled) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.font.colors.default;
};

const getBorderColor = (props) => {
  if (props.disabled) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.error) {
    return props.theme.error.color.primary;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.checked) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGrey;
};

const getBackgroundColor = (props) => {
  if (props.disabled) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (props.error) {
    return props.theme.error.color.secondary;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  return 'transparent';
};

export const Box = styled(({
  error,
  ...rest,
}) =>
  <View {...rest} />
)`
  height: ${size(20)};
  width: ${size(20)};
  border-radius: ${size(4)};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
`;

const StyledLabelText = LabelText.extend`
  color: ${props => getTextColor(props)};
  margin-left: ${size(10)};
`;

const Checkmark = withTheme(({
  error,
  inverted,
  disabled,
  theme,
}) => (
  <Icons.Checkmark
    fill={
      getCheckColor({
        error,
        inverted,
        disabled,
        theme,
      })}
    height={20}
    width={20}
  />
));

const Checkbox = styled(({
  checked,
  error,
  inverted,
  disabled,
  onClick,
  onPress,
  onLongPress,
  title,
  ...rest }) => (
    <Touchable
      onClick={onClick}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      {...rest}
      accessibilityRole="checkbox"
      aria-checked={checked ? 'true' : 'false'}
    >
      <Box
        checked={checked}
        disabled={disabled}
        error={error}
        inverted={inverted}
      >
        { checked && <Checkmark disabled={disabled} error={error} inverted={inverted} />}
      </Box>
      { title &&
        <StyledLabelText
          disabled={disabled}
          inverted={inverted}
        >
          {title}
        </StyledLabelText>
      }
    </Touchable>
))`
  flex-direction: row;
`;


Checkbox.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inverted: PropTypes.bool,
  onPress: PropTypes.func,
  innerRef: PropTypes.func,
  title: PropTypes.string
};

export default Checkbox;

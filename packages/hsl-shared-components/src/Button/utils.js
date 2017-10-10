export const getTextColor = (props) => {
  if (props.disabled) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.primary) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.font.colors.highlight;
};

export const getBorderColor = (props, force = {}) => {
  const disabled = props.disabled || force.disabled;
  const hover = props.hover || force.hover;

  if (disabled) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.primary && props.success && hover) {
    return props.theme.colors.background.hslGreenDark;
  }
  if (props.primary && props.success) {
    return props.theme.colors.background.hslGreen;
  }
  if (props.primary && hover) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.primary) {
    return props.theme.colors.primary.hslBlue;
  }
  if (hover) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

export const getBackgroundColor = (props, force = {}) => {
  const disabled = props.disabled || force.disabled;
  const hover = props.hover || force.hover;

  if (props.transparent) {
    return 'transparent';
  }
  if (disabled && props.inverted) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (disabled && props.primary) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (disabled) {
    return props.theme.colors.background.hslWhite;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.primary && props.success && hover) {
    return props.theme.colors.primary.hslGreenDark;
  }
  if (props.primary && props.success) {
    return props.theme.colors.primary.hslGreen;
  }
  if (props.primary && hover) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.primary) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.background.hslWhite;
};

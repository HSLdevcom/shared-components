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
  const active = props.active || force.active;

  if (disabled) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.primary && props.success && (hover || active)) {
    return props.theme.colors.secondary.hslGreenDark;
  }
  if (props.primary && props.success) {
    return props.theme.colors.secondary.hslGreen;
  }
  if (props.primary && (hover || active)) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.primary) {
    return props.theme.colors.primary.hslBlue;
  }
  if (hover || active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

export const getBackgroundColor = (props, force = {}) => {
  const disabled = props.disabled || force.disabled;
  const hover = props.hover || force.hover;
  const active = props.active || force.active;

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
  if (props.inverted && (hover || active)) {
    return props.theme.colors.background.hslBlueLight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.primary && props.success && (hover || active)) {
    return props.theme.colors.secondary.hslGreenDark;
  }
  if (props.primary && props.success) {
    return props.theme.colors.secondary.hslGreen;
  }
  if (props.primary && (hover || active)) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.primary) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.background.hslWhite;
};

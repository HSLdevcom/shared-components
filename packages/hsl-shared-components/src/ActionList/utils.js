import { Platform } from 'react-primitives';

// Needed to make sure we don't pass falsy values as style rule to styled components
const evaluate = (condition, styles) => {
  if (condition) {
    return styles;
  }
  return '';
};

export const getTextColor = (props, subtitle = false) => {
  if (props.inverted && props.active) {
    return props.theme.font.colors.highlight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (subtitle) {
    return props.theme.font.colors.default;
  }
  return props.theme.font.colors.highlight;
};

export const getBorderColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.withBorder) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

export const getBackgroundColor = (props) => {
  if (props.inverted && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.inverted && props.pressed) {
    return props.theme.colors.primary.hslBlueDark;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.secondary && props.pressed) {
    return props.theme.colors.background.hslGreyXLight;
  }
  if (props.secondary) {
    return props.theme.colors.background.hslGreyLight;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.withBorder && props.pressed) {
    return props.theme.colors.background.hslGreyLight;
  }
  if (props.withBorder) {
    return props.theme.colors.background.hslWhite;
  }
  if (props.active) {
    return 'transparent';
  }
  if (props.pressed) {
    return props.theme.colors.background.hslGreyLight;
  }
  return 'transparent';
};

// The use of border-width might seem funny, but is required by android
export const getVerticalListBorderStyles = props => `
  border-bottom-width: 1px;

  ${evaluate(props.withBorder, `
    border-top-width: 0px;
    border-right-width: 1px;
    border-left-width: 1px;
  `)}

  ${evaluate((props.withBorder || props.secondary) && props.first, `
    border-width: 1px;
    border-top-width: 1px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `)}

  ${evaluate(Platform.OS === 'android' && props.withBorder && props.secondToLast, `
    border-bottom-width: 0px;
  `)}

  ${evaluate((props.withBorder || props.secondary) && props.last, `
      border-width: 1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
  `)}

  ${evaluate(props.secondary, `
    border-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  `)}

  ${evaluate((!props.withBorder || props.secondary) && props.last, `
    border-bottom-width: 0px;
  `)}

  ${evaluate(Platform.OS === 'android' && props.secondary && props.second, `
    border-top-width: 1px;
  `)}
`;

export const getHorizontalListBorderStyles = props =>
`
  border-right-width: 1px;

  ${evaluate(props.withBorder, `
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  `)}

  ${evaluate((props.withBorder || props.secondary) && props.first, `
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-width: 1px;
  `)}

  ${evaluate((props.withBorder || props.secondary) && props.last, `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-width: 1px;
    border-left-width: 0px;
  `)}

  ${evaluate(props.secondary, `
    border-width: 0px;
    border-top-width: 0px;
    border-right-width: 1px;
    border-bottom-width: 0px;
    border-left-width: 0px;
  `)}

  ${evaluate((!props.withBorder || props.secondary) && props.last, `
    border-right-width: 0px;
  `)}

  ${evaluate(Platform.OS === 'android' && props.secondary && props.second, `
    border-left-width: 1px;
  `)}
`;

import { Platform } from 'react-primitives';

// Needed to make sure we don't pass falsy values as style rule to styled components
const evaluate = (condition, styles) => {
  if (condition) {
    return styles;
  }
  return '';
};

export const getTextColor = (props, secondary = false) => {
  if (props.inverted && props.active) {
    return props.theme.font.colors.highlight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (secondary) {
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
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

export const getBackgroundColor = (props) => {
  if (props.inverted && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslWhite;
};

export const getVerticalListBorderStyles = props =>
`
  border-bottom-width: 1px;

  ${evaluate(props.withBorder, `
    border-top-width: 0px;
    border-right-width: 1px;
    border-left-width: 1px;
  `)}

  ${evaluate(props.withBorder && props.first, `
    border-top-width: 1px;
    border-width: 1px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `)}

  ${evaluate(Platform.OS === 'android' && props.withBorder && props.secondToLast, `
    border-bottom-width: 0px;
  `)}

  ${evaluate(props.withBorder && props.last, `
      border-width: 1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
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

  ${evaluate(props.withBorder && props.first, `
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-width: 1px;
  `)}

  ${evaluate(Platform.OS === 'android' && props.withBorder && props.secondToLast, `
    border-right-width: 0px;
  `)}

  ${evaluate(props.withBorder && props.last, `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-width: 1px;
    border-left-width: 0px;
  `)}
`;

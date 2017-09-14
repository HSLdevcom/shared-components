// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

export const colors = {
  primary: {
    hslBlue: '#007ac9',
    hslBlueDark: '#0062a1',
    hslGreen: '#4ea700',
    hslGrey: '#888888',
    hslGreyDark: '#333333',
  },
  secondary: {
    hslOrange: '#ff6319',
    hslMagenta: '#dc0451',
    hslPurple: '#8c4799',
    hslYellow: '#fed100',
    hslPink: '#f092cd',
  },
  background: {
    hslWhite: '#ffffff',
    hslBlueLight: '#eff9ff',
    hslGreyLight: '#eef1f3',
  },
  // These colors are not defined in UI-kit, but still needed
  misc: {
    greyLight: '#b7b7b7',
    greyXLight: '#e4e4e4',
  }
};

export const sizes = {
  large: 1299,
  medium: 999,
  small: 869,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  // use rem in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  const returnObject = Object.assign({}, accumulator);
  returnObject[label] = (...args) => css`
    @media (max-width: ${emSize}rem) {
      ${css(...args)}
    }
  `;
  return returnObject;
}, {});

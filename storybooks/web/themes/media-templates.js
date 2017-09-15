// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

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

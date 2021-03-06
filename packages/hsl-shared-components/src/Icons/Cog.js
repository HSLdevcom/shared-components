import React from 'react';

import { Svg,
  Path
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 70 70" version="1.1" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M70,41.426 L70,28.574 L58.447,28.574 C57.908,26.588 57.128,24.706 56.131,22.957 L64.294,14.794 L55.206,5.706 L47.039,13.869 C45.29,12.872 43.408,12.092 41.426,11.549 L41.426,0 L28.574,0 L28.574,11.549 C26.592,12.092 24.706,12.872 22.956,13.869 L14.793,5.706 L5.705,14.794 L13.868,22.957 C12.87,24.706 12.091,26.588 11.548,28.574 L0,28.574 L0,41.426 L11.549,41.426 C12.092,43.412 12.872,45.294 13.869,47.043 L5.706,55.206 L14.794,64.29 L22.957,56.131 C24.707,57.128 26.588,57.908 28.575,58.451 L28.575,70 L41.427,70 L41.427,58.451 C43.409,57.908 45.295,57.128 47.045,56.131 L55.208,64.29 L64.296,55.206 L56.133,47.043 C57.131,45.294 57.91,43.412 58.449,41.426 L70,41.426 L70,41.426 Z M35,47.711 C27.979,47.711 22.289,42.021 22.289,35 C22.289,27.979 27.979,22.289 35,22.289 C42.017,22.289 47.711,27.979 47.711,35 C47.711,42.021 42.017,47.711 35,47.711 Z" id="Shape" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.Cog';

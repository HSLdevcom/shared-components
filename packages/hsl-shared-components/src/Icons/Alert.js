import React from 'react';
import { Svg, Path } from 'react-primitives-svg';
import PropTypes from 'prop-types';
import { svgSize } from '../utils';
import { Colors } from '../Theme';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 35 32" version="1.1">
      <Path fill={fill} d="M20.655,1.86 L34.155,25.32 C34.575,25.92 34.755,26.64 34.755,27.36 C34.755,29.4 33.075,31.14 30.975,31.14 L3.735,31.14 C2.415,31.14 1.155,30.42 0.495,29.22 C-0.165,28.08 -0.165,26.64 0.495,25.5 L14.115,1.86 C14.775,0.72 16.035,0 17.355,0 C18.735,0 19.935,0.72 20.655,1.86 Z M18.435,20.04 L19.455,8.28 C19.515,7.56 19.035,7.02 18.375,7.02 L16.335,7.02 C15.675,7.02 15.255,7.56 15.315,8.28 L16.335,20.04 C16.395,20.64 16.815,21.06 17.355,21.06 C17.955,21.06 18.375,20.64 18.435,20.04 Z M19.395,25.44 L19.395,25.14 C19.395,24 18.555,23.16 17.355,23.16 C16.215,23.16 15.315,24 15.315,25.14 L15.315,25.44 C15.315,26.58 16.215,27.42 17.355,27.42 C18.555,27.42 19.395,26.58 19.395,25.44 Z" id="S" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  fill: Colors.secondary.hslMagenta,
};

Icon.displayName = 'Icons.Alert';

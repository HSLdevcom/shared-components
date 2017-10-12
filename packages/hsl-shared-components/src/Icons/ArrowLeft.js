import React from 'react';
import { Svg, Path } from 'react-primitives-svg';
import PropTypes from 'prop-types';
import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 20 36" version="1.1" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M6.360375,16.999375 L18.851375,4.508375 C19.654375,3.705375 19.654375,2.404375 18.851375,1.601375 C18.048375,0.798375 16.747375,0.798375 15.944375,1.601375 L0.546375,16.999375 L0.546375,17.000375 L3.453375,19.906375 L15.944375,32.397375 C16.747375,33.200375 18.048375,33.200375 18.851375,32.397375 C19.654375,31.594375 19.654375,30.293375 18.851375,29.490375 L6.360375,16.999375 L6.360375,16.999375 Z" id="Collapse-Left" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.ArrowLeft';

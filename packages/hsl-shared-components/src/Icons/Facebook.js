import React from 'react';

import { Svg,
  Path
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 17 33" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M16.7982286,11.9856261 L11.034563,11.9856261 L11.034563,8.26958518 C11.034563,6.58443921 11.5045179,5.43616736 13.920705,5.43616736 L17,5.43464647 L17,0.229147407 C16.4681955,0.158172546 14.6405928,0 12.5103331,0 C8.06629291,0 5.02603406,2.71276056 5.02603406,7.69367489 L5.02603406,11.9856261 L0,11.9856261 L0,17.8050577 L5.02603406,17.8050577 L5.02603406,32.7381684 L11.034563,32.7381684 L11.034563,17.8050577 L16.047416,17.8050577 L16.7982286,11.9856261 Z" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.displayName = 'Icons.Facebook';

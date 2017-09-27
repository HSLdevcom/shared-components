import React from 'react';

import { Svg,
  Path,
  G,
} from 'react-primitives-svg';

import PropTypes from 'prop-types';

import { IS_NATIVE, svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  const flipNative = IS_NATIVE ? {
    rotate: 180,
    originX: 21.0,
    originY: 13.0,
  } : {};

  const flipWeb = !IS_NATIVE ? {
    transform: 'scale(1, -1), translate(0, -27.47)',
  } : {};

  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 42.5 27.47" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G {...flipNative}>
        <Path {...flipWeb} fill={fill} d="M35.043,1.271 L21.214,15.140 L7.384,1.271 C5.687,-0.431 2.934,-0.431 1.234,1.271 L1.234,1.271 C-0.463,2.973 -0.463,5.733 1.234,7.436 L21.214,27.468 L41.191,7.436 C42.887,5.733 42.887,2.973 41.191,1.271 L41.191,1.271 C39.493,-0.431 36.743,-0.431 35.043,1.271 Z" id="arrow" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.ArrowLeft';

import React from 'react';

import { Svg,
  Circle,
  G
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="-5 0 48 10" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Circle id="Oval" cx="5" cy="5" r="5" />
        <Circle id="Oval" cx="19" cy="5" r="5" />
        <Circle id="Oval" cx="33" cy="5" r="5" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.More';

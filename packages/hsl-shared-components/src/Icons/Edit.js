import React from 'react';

import { Svg,
  G,
  Path,
  Polygon
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

export default function Icon({ fill, ...rest }) {
  return (
    <Svg {...rest} viewBox="0 0 284 284" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Path d="M234.931,8.371 C229.491,2.931 222.011,0.211 214.872,0.211 C207.732,0.211 200.253,2.931 194.813,8.371 L47.938,155.246 L128.175,235.483 L275.05,88.608 C286.27,77.388 286.27,59.709 275.05,48.489 L234.931,8.371 Z" />
        <Polygon id="Shape" points="107.096,254.522 28.899,176.325 0,283.421" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string
};


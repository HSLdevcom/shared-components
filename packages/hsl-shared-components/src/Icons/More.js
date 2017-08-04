import React from 'react';

import { Svg,
  Circle,
  G
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

export default function Icon({ fill, ...rest }) {
  return (
    <Svg {...rest} viewBox="-5 0 48 10" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Circle id="Oval" cx="5" cy="5" r="5" />
        <Circle id="Oval" cx="19" cy="5" r="5" />
        <Circle id="Oval" cx="33" cy="5" r="5" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string
};

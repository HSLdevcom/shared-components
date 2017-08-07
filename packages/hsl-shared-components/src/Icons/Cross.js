import React from 'react';

import { Svg,
  Path
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

export default function Icon({ fill, ...rest }) {
  return (
    <Svg {...rest} viewBox="0 0 35 35" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M20.669,17.5 L33.349,30.18 C34.224,31.055 34.224,32.474 33.349,33.349 C32.474,34.224 31.055,34.224 30.18,33.349 L17.5,20.669 L4.82,33.349 C3.945,34.224 2.526,34.224 1.651,33.349 C0.775,32.474 0.775,31.055 1.651,30.18 L14.331,17.5 L1.651,4.821 C0.775,3.945 0.775,2.526 1.651,1.651 C2.526,0.775 3.945,0.775 4.82,1.651 L17.5,14.331 L30.18,1.651 C31.055,0.775 32.474,0.775 33.349,1.651 C34.224,2.526 34.224,3.945 33.349,4.821 L20.669,17.5 Z" id="Shape" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string
};
Icon.displayName = 'Icon.Cross';

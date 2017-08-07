import React from 'react';

import { Svg,
  G,
  Path
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

export default function Icon({ fill, ...rest }) {
  return (
    <Svg {...rest} viewBox="0 0 27 31" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Path d="M5.77845689,7.92908558 C5.77845689,12.2520665 9.27594395,15.8147241 13.4903072,15.8147241 L13.5989249,15.8147241 C17.8132882,15.8147241 21.3107752,12.2520665 21.3107752,7.92908558 C21.3107752,3.60610468 17.8132882,0.108617611 13.5989249,0.108617611 C9.27594395,0.108617611 5.77845689,3.60610468 5.77845689,7.92908558 Z" id="Shape" />
        <Path d="M24.6561976,19.7466816 C23.7872567,17.0746884 22.2883337,16.140577 19.8987463,16.140577 L17.9870763,16.140577 C17.9870763,16.140577 16.0971299,18.2043116 13.4468602,18.2043116 C10.7314199,18.2043116 8.90664408,16.140577 8.90664408,16.140577 L6.99497413,16.140577 C4.60538669,16.140577 3.14991071,17.0746884 2.19407574,19.7466816 C2.19407574,19.7466816 0.0651705664,27.2630203 0.0651705664,28.2405788 C0.0651705664,28.8922844 0.499641009,29.413649 1.10789963,29.6091607 C1.71615825,29.8915665 3.0412931,30.1305252 4.84434544,30.3260369 L5.66983928,25.0906681 L6.45188608,25.0906681 L6.45188608,28.0667906 L6.45188608,30.4781016 C8.49389716,30.6301662 10.9486552,30.7170603 13.5772013,30.7170603 C16.2057475,30.7170603 18.638782,30.6301662 20.6807931,30.4781016 L20.6807931,28.0667906 L20.6807931,25.0906681 L21.4411164,25.0906681 L21.4628399,25.0906681 L22.3100572,30.3260369 C24.1131096,30.1305252 25.4165209,29.8915665 26.003056,29.6091607 C26.502697,29.4353725 26.8285498,28.9791785 26.8285498,28.2623023 C26.8285498,27.2630203 24.6561976,19.7466816 24.6561976,19.7466816 Z" id="Shape" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string
};
Icon.displayName = 'Icon.SignIn';

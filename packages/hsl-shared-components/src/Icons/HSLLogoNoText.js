import React from 'react';

import { Svg,
  Path
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 160 60" version="1.1" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M42,21.001 C42,22.8503125 40.28325,24.1706875 37.9719375,24.1706875 C37.9063125,24.1706875 36.122625,24.1050625 34.80225,22.8503125 L32.0945625,29.387875 C33.87825,29.4535 35.198625,30.70825 35.26425,30.7751875 C36.915375,32.4263125 37.1135625,34.5394375 35.8588125,35.7941875 C34.5384375,37.1145625 32.4253125,36.85075 30.7741875,35.26525 C30.7085625,35.199625 29.4538125,33.944875 29.386875,32.0299375 L22.9149375,34.737625 C24.1696875,36.1249375 24.1696875,37.9073125 24.1696875,37.9729375 C24.1696875,40.28425 22.8493125,42.001 21,42.001 C19.1506875,42.001 17.8303125,40.28425 17.8303125,37.9729375 C17.8303125,37.9073125 17.8303125,36.123625 19.1506875,34.737625 L12.5461875,32.0299375 C12.5461875,33.944875 11.2914375,35.199625 11.2258125,35.26525 C9.5746875,36.85075 7.4615625,37.1145625 6.1411875,35.7941875 C4.8208125,34.5394375 5.084625,32.4263125 6.73575,30.7751875 C6.801375,30.7095625 8.056125,29.4548125 9.9054375,29.387875 L7.19775,22.8503125 C5.877375,24.1050625 4.0936875,24.1706875 4.0280625,24.1706875 C1.651125,24.1706875 3.55271368e-15,22.8503125 3.55271368e-15,21.001 C3.55271368e-15,19.1516875 1.651125,17.8313125 4.0280625,17.8313125 C4.0936875,17.8313125 5.877375,17.8313125 7.19775,19.0860625 L9.9054375,12.614125 C8.056125,12.4815625 6.801375,11.29375 6.73575,11.2268125 C5.084625,9.5756875 4.8208125,7.4625625 6.1411875,6.1421875 C7.4615625,4.8218125 9.5746875,5.085625 11.2258125,6.73675 C11.2914375,6.802375 12.5461875,8.057125 12.5461875,9.9064375 L19.1506875,7.19875 C17.8303125,5.878375 17.8303125,4.0946875 17.8303125,4.0290625 C17.8303125,1.652125 19.1506875,0.001 21,0.001 C22.8493125,0.001 24.1696875,1.652125 24.1696875,4.0290625 C24.1696875,4.0946875 24.1696875,5.878375 22.9149375,7.19875 L29.386875,9.9064375 C29.4525,8.057125 30.70725,6.802375 30.7741875,6.73675 C32.4253125,5.085625 34.5384375,4.8218125 35.8588125,6.1421875 C37.1135625,7.4625625 36.915375,9.5756875 35.26425,11.2268125 C35.198625,11.2924375 33.8769375,12.4815625 32.0945625,12.614125 L34.80225,19.0860625 C36.122625,17.8313125 37.9063125,17.8313125 37.9719375,17.8313125 C40.28325,17.8313125 42,19.1516875 42,21.001 Z M6.405,21.001 C5.61225,19.680625 4.0936875,19.6136875 4.0280625,19.6136875 C2.7076875,19.6136875 1.8493125,20.20825 1.8493125,21.001 C1.8493125,21.79375 2.7076875,22.321375 4.0280625,22.321375 C4.0936875,22.321375 5.6135625,22.25575 6.405,21.001 Z M8.056125,9.9064375 C8.12175,9.9720625 9.1783125,11.028625 10.6981875,10.6991875 C11.0289375,9.180625 9.972375,8.1240625 9.9054375,7.9915 C9.0470625,7.133125 7.9905,6.8693125 7.3959375,7.4625625 C6.867,7.9915 7.132125,9.0480625 8.056125,9.9064375 L8.056125,9.9064375 Z M10.696875,31.304125 C9.1783125,30.90775 8.12175,31.9643125 8.0548125,32.0299375 C7.1308125,32.9539375 6.8656875,34.0105 7.394625,34.5394375 C7.9891875,35.068375 9.04575,34.8701875 9.904125,33.944875 C9.96975,33.87925 11.09325,32.75575 10.696875,31.3028125 L10.696875,31.304125 Z M29.9145,29.8511875 L33.5461875,21.0023125 L29.9145,12.0865 L20.9986875,8.387875 L12.082875,12.0865 L8.38425,21.0023125 L12.082875,29.8511875 L20.9986875,33.5498125 L29.9145,29.8511875 Z M19.6783125,4.0290625 C19.6783125,4.0946875 19.6783125,5.6145625 20.9986875,6.406 C22.2534375,5.61325 22.3190625,4.0946875 22.3190625,4.0290625 C22.3190625,2.7086875 21.790125,1.8503125 20.9986875,1.8503125 C20.20725,1.8503125 19.6783125,2.7086875 19.6783125,4.0290625 L19.6783125,4.0290625 Z M22.320375,37.9729375 C22.320375,37.9073125 22.25475,36.3218125 21,35.596 C19.679625,36.3218125 19.679625,37.9073125 19.679625,37.9729375 C19.679625,39.2276875 20.2085625,40.1516875 21,40.1516875 C21.7914375,40.1516875 22.320375,39.2276875 22.320375,37.9729375 Z M31.3018125,10.6991875 C32.75475,11.0299375 33.8769375,9.973375 33.9425625,9.9064375 C34.8665625,9.0480625 35.1316875,7.9915 34.537125,7.4625625 C34.0081875,6.868 32.951625,7.1318125 32.027625,7.9915 C31.962,8.12275 30.9710625,9.1793125 31.3018125,10.6991875 Z M33.9425625,32.0299375 C33.8769375,31.9643125 32.7534375,30.90775 31.3018125,31.304125 C30.9710625,32.7570625 31.962,33.87925 32.027625,33.9461875 C32.951625,34.8701875 34.0081875,35.068375 34.537125,34.54075 C35.1316875,34.013125 34.867875,32.9565625 33.9425625,32.03125 L33.9425625,32.0299375 Z M40.1506875,21.001 C40.1506875,20.20825 39.2266875,19.6136875 37.9719375,19.6136875 C37.9063125,19.6136875 36.3864375,19.6793125 35.595,21.001 C36.38775,22.25575 37.9063125,22.321375 37.9719375,22.321375 C39.2266875,22.321375 40.1506875,21.79375 40.1506875,21.001 Z" id="Shape" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.HSLLogoNoText';

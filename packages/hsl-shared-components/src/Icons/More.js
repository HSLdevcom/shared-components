import React from 'react';
import { Svg, Path, G } from 'react-primitives-svg';
import PropTypes from 'prop-types';
import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 35 10" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Path d="M0,4.532625 L0,4.467375 C0,2.13075 1.925,0.2475 4.13328125,0.2475 C6.3109375,0.2475 8.2665625,2.129625 8.2665625,4.467375 L8.2665625,4.532625 C8.2665625,6.86925 6.405,8.7525 4.13328125,8.7525 C1.8615625,8.7525 0,6.870375 0,4.532625 Z" id="Circle-1" />
        <Path d="M13.3667188,4.532625 L13.3667188,4.467375 C13.3667188,2.13075 15.2917187,0.2475 17.5,0.2475 C19.6776562,0.2475 21.6332812,2.129625 21.6332812,4.467375 L21.6332812,4.532625 C21.6332812,6.86925 19.7717187,8.7525 17.5,8.7525 C15.2282813,8.7525 13.3667188,6.870375 13.3667188,4.532625 Z" id="Circle-2" />
        <Path d="M26.7323437,4.532625 L26.7323437,4.467375 C26.7323437,2.13075 28.6573437,0.2475 30.865625,0.2475 C33.0432812,0.2475 34.9989062,2.129625 34.9989062,4.467375 L34.9989062,4.532625 C34.9989062,6.86925 33.1373437,8.7525 30.865625,8.7525 C28.5939062,8.7525 26.7323437,6.870375 26.7323437,4.532625 Z" id="Circle-3" />
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

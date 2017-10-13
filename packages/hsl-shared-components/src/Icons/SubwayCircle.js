import React from 'react';
import { Svg, G, Path } from 'react-primitives-svg';
import PropTypes from 'prop-types';
import { svgSize } from '../utils';
import { Colors } from '../Theme';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 35 35" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G>
        <Path fill={fill.outer} d="M35,17.5 C35,27.1654687 27.164375,35 17.5,35 C7.835625,35 0,27.164375 0,17.5 C0,7.83453125 7.835625,0 17.5,0 C27.164375,0 35,7.835625 35,17.5 Z" id="Shape" />
        <Path fill={fill.border} d="M17.5,1.23484375 C21.844375,1.23484375 25.9295312,2.926875 29.001875,5.99921875 C32.0742187,9.0715625 33.76625,13.155625 33.76625,17.5010937 C33.76625,21.8465625 32.0742188,25.930625 29.001875,29.0029687 C25.9295312,32.0753125 21.8454687,33.7673437 17.5,33.7673437 C13.1545312,33.7673437 9.07046875,32.0753125 5.998125,29.0029687 C2.92578125,25.930625 1.23375,21.8465625 1.23375,17.5010937 C1.23375,13.155625 2.92578125,9.0715625 5.998125,5.99921875 C9.07046875,2.926875 13.1545312,1.23484375 17.5,1.23484375 Z M17.5,0 C7.83453125,0 0,7.83453125 0,17.5 C0,27.1654687 7.83453125,35 17.5,35 C27.1654687,35 35,27.164375 35,17.5 C35,7.835625 27.1654687,0 17.5,0 L17.5,0 Z" id="Shape" />
        <Path fill={fill.inner} d="M27.1042187,10.1532812 L27.1042187,23.4095312 C27.1042187,24.3567187 26.495,25.0326562 25.6167187,25.1682812 C23.4182812,25.5740625 20.7473437,25.878125 17.5,25.878125 C14.2876563,25.878125 11.615625,25.5401562 9.4171875,25.1682812 C8.47,25.0326562 7.89578125,24.2889062 7.89578125,23.3417187 L7.89578125,10.0854688 C7.89578125,9.104375 8.505,8.4284375 9.4171875,8.32671875 C11.615625,7.9209375 14.2865625,7.616875 17.5,7.616875 C20.74625,7.616875 23.4182812,7.95484375 25.6167187,8.32671875 C26.53,8.4284375 27.1042187,9.1721875 27.1042187,10.1532812 Z M10.9396875,22.3278125 C10.9396875,21.888125 10.5339063,21.4823438 10.0942188,21.4823438 C9.620625,21.4823438 9.21484375,21.888125 9.1809375,22.3278125 C9.1809375,22.8014063 9.58671875,23.2071875 10.0942188,23.2410938 C10.5339063,23.2410938 10.9396875,22.8353125 10.9396875,22.3278125 L10.9396875,22.3278125 Z M25.0414062,20.0276562 C25.4810937,20.0276562 25.7173437,19.7235938 25.7173437,19.25 L25.7173437,10.6946875 C25.7173437,10.255 25.4132812,9.883125 24.9735937,9.883125 L9.9925,9.883125 C9.58671875,9.883125 9.3165625,10.2210938 9.3165625,10.6946875 L9.3165625,19.25 C9.3165625,19.6896875 9.65453125,20.0276562 10.0942187,20.0276562 L25.0414062,20.0276562 Z M21.2198437,27.1971875 C21.5578125,27.1971875 21.8957812,27.5690625 21.8957812,27.9409375 C21.8957812,28.2789062 21.5578125,28.616875 21.2198437,28.616875 L13.9157812,28.616875 C13.5778125,28.616875 13.2398437,28.2789062 13.2398437,27.9409375 C13.2398437,27.5690625 13.5778125,27.1971875 13.9157812,27.1971875 L21.2198437,27.1971875 Z M25.8190625,22.3278125 C25.8190625,21.888125 25.4471875,21.4823438 24.9735937,21.4823438 C24.5339062,21.4823438 24.128125,21.888125 24.0942187,22.3278125 C24.0942187,22.8014063 24.4660937,23.2071875 24.9735937,23.2410938 C25.4471875,23.2410938 25.8190625,22.8353125 25.8190625,22.3278125 Z" id="Shape" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.shape({
    inner: PropTypes.string,
    outer: PropTypes.string,
    border: PropTypes.string,
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  fill: {
    inner: Colors.primary.hslWhite,
    outer: Colors.secondary.hslOrange,
    border: Colors.secondary.hslOrangeDark,
  }
};

Icon.displayName = 'Icons.SubwayCircle';
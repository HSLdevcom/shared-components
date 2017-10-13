import React from 'react';
import { Svg, G, Path, Rect } from 'react-primitives-svg';
import PropTypes from 'prop-types';
import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 33 33" version="1.1" preserveAspectRatio="xMidYMid meet">
      <G>
        <Path fill={fill.outer} d="M23.9795668,0.2045772 C24.4653268,0.2045772 24.8600068,0.5983772 24.8600068,1.0845772 L24.8600068,4.6045772 C24.8600068,5.0903372 24.4653268,5.4845772 23.9795668,5.4845772 C23.4938068,5.4845772 23.0995668,5.0903372 23.0995668,4.6045772 L23.0995668,1.0845772 C23.0995668,0.5983772 23.4938068,0.2045772 23.9795668,0.2045772 Z M7.25912683,0.2045772 C7.74488683,0.2045772 8.13912683,0.5983772 8.13912683,1.0845772 L8.13912683,4.6045772 C8.13912683,5.0903372 7.74488683,5.4845772 7.25912683,5.4845772 C6.77336683,5.4845772 6.37956683,5.0903372 6.37956683,4.6045772 L6.37956683,1.0845772 C6.37956683,0.5983772 6.77336683,0.2045772 7.25912683,0.2045772 Z M29.2595668,2.8444012 C30.2319668,2.8444012 31.0200068,3.6324412 31.0200068,4.6044012 L31.0200068,27.4844012 C31.0200068,28.4563612 30.2319668,29.2444012 29.2595668,29.2444012 L1.98000683,29.2444012 C1.00760683,29.2444012 0.219566828,28.4563612 0.219566828,27.4844012 L0.219566828,4.6044012 C0.219566828,3.6324412 1.00760683,2.8444012 1.98000683,2.8444012 L5.49956683,2.8444012 L5.49956683,4.6044012 C5.49956683,5.5763612 6.28760683,6.3644012 7.25956683,6.3644012 C8.23152683,6.3644012 9.01956683,5.5763612 9.01956683,4.6044012 L9.01956683,2.8444012 L22.2195668,2.8444012 L22.2195668,4.6044012 C22.2195668,5.5763612 23.0076068,6.3644012 23.9795668,6.3644012 C24.9515268,6.3644012 25.7395668,5.5763612 25.7395668,4.6044012 L25.7395668,2.8444012 L29.2595668,2.8444012 Z" id="Shape" fill-rule="nonzero" />
        <Rect fill={fill.inner} x="2" y="10" height="17" width="27" />
        <Path fill={fill.outer} d="M19.1400068,22.6443572 C19.8682068,22.6443572 20.4595668,23.2352772 20.4595668,23.9643572 C20.4595668,24.6934372 19.8682068,25.2843572 19.1400068,25.2843572 C18.4104868,25.2843572 17.8195668,24.6934372 17.8195668,23.9643572 C17.8195668,23.2352772 18.4104868,22.6443572 19.1400068,22.6443572 Z M15.6191268,22.6443572 C16.3477668,22.6443572 16.9395668,23.2352772 16.9395668,23.9643572 C16.9395668,24.6934372 16.3477668,25.2843572 15.6191268,25.2843572 C14.8904868,25.2843572 14.2991268,24.6934372 14.2991268,23.9643572 C14.2991268,23.2352772 14.8904868,22.6443572 15.6191268,22.6443572 Z M12.0995668,22.6443572 C12.8282068,22.6443572 13.4200068,23.2352772 13.4200068,23.9643572 C13.4200068,24.6934372 12.8282068,25.2843572 12.0995668,25.2843572 C11.3704868,25.2843572 10.7800068,24.6934372 10.7800068,23.9643572 C10.7800068,23.2352772 11.3704868,22.6443572 12.0995668,22.6443572 Z M8.57956683,22.6443572 C9.30864683,22.6443572 9.89956683,23.2352772 9.89956683,23.9643572 C9.89956683,24.6934372 9.30864683,25.2843572 8.57956683,25.2843572 C7.85048683,25.2843572 7.25912683,24.6934372 7.25912683,23.9643572 C7.25912683,23.2352772 7.85048683,22.6443572 8.57956683,22.6443572 Z M5.06000683,22.6443572 C5.78864683,22.6443572 6.37956683,23.2352772 6.37956683,23.9643572 C6.37956683,24.6934372 5.78864683,25.2843572 5.06000683,25.2843572 C4.33004683,25.2843572 3.73956683,24.6934372 3.73956683,23.9643572 C3.73956683,23.2352772 4.33004683,22.6443572 5.06000683,22.6443572 Z M26.1791268,19.1243572 C26.9086468,19.1243572 27.5000068,19.7152772 27.5000068,20.4443572 C27.5000068,21.1734372 26.9086468,21.7643572 26.1791268,21.7643572 C25.4504868,21.7643572 24.8600068,21.1734372 24.8600068,20.4443572 C24.8600068,19.7152772 25.4504868,19.1243572 26.1791268,19.1243572 Z M22.6591268,19.1243572 C23.3886468,19.1243572 23.9795668,19.7152772 23.9795668,20.4443572 C23.9795668,21.1734372 23.3886468,21.7643572 22.6591268,21.7643572 C21.9309268,21.7643572 21.3391268,21.1734372 21.3391268,20.4443572 C21.3391268,19.7152772 21.9309268,19.1243572 22.6591268,19.1243572 Z M19.1400068,19.1243572 C19.8682068,19.1243572 20.4595668,19.7152772 20.4595668,20.4443572 C20.4595668,21.1734372 19.8682068,21.7643572 19.1400068,21.7643572 C18.4104868,21.7643572 17.8195668,21.1734372 17.8195668,20.4443572 C17.8195668,19.7152772 18.4104868,19.1243572 19.1400068,19.1243572 Z M15.6191268,19.1243572 C16.3477668,19.1243572 16.9395668,19.7152772 16.9395668,20.4443572 C16.9395668,21.1734372 16.3477668,21.7643572 15.6191268,21.7643572 C14.8904868,21.7643572 14.2991268,21.1734372 14.2991268,20.4443572 C14.2991268,19.7152772 14.8904868,19.1243572 15.6191268,19.1243572 Z M12.0995668,19.1243572 C12.8282068,19.1243572 13.4200068,19.7152772 13.4200068,20.4443572 C13.4200068,21.1734372 12.8282068,21.7643572 12.0995668,21.7643572 C11.3704868,21.7643572 10.7800068,21.1734372 10.7800068,20.4443572 C10.7800068,19.7152772 11.3704868,19.1243572 12.0995668,19.1243572 Z M8.57956683,19.1243572 C9.30864683,19.1243572 9.89956683,19.7152772 9.89956683,20.4443572 C9.89956683,21.1734372 9.30864683,21.7643572 8.57956683,21.7643572 C7.85048683,21.7643572 7.25912683,21.1734372 7.25912683,20.4443572 C7.25912683,19.7152772 7.85048683,19.1243572 8.57956683,19.1243572 Z M5.06000683,19.1243572 C5.78864683,19.1243572 6.37956683,19.7152772 6.37956683,20.4443572 C6.37956683,21.1734372 5.78864683,21.7643572 5.06000683,21.7643572 C4.33004683,21.7643572 3.73956683,21.1734372 3.73956683,20.4443572 C3.73956683,19.7152772 4.33004683,19.1243572 5.06000683,19.1243572 Z M26.1791268,15.6043572 C26.9086468,15.6043572 27.5000068,16.1952772 27.5000068,16.9243572 C27.5000068,17.6534372 26.9086468,18.2443572 26.1791268,18.2443572 C25.4504868,18.2443572 24.8600068,17.6534372 24.8600068,16.9243572 C24.8600068,16.1952772 25.4504868,15.6043572 26.1791268,15.6043572 Z M22.6591268,15.6043572 C23.3886468,15.6043572 23.9795668,16.1952772 23.9795668,16.9243572 C23.9795668,17.6534372 23.3886468,18.2443572 22.6591268,18.2443572 C21.9309268,18.2443572 21.3391268,17.6534372 21.3391268,16.9243572 C21.3391268,16.1952772 21.9309268,15.6043572 22.6591268,15.6043572 Z M19.1400068,15.6043572 C19.8682068,15.6043572 20.4595668,16.1952772 20.4595668,16.9243572 C20.4595668,17.6534372 19.8682068,18.2443572 19.1400068,18.2443572 C18.4104868,18.2443572 17.8195668,17.6534372 17.8195668,16.9243572 C17.8195668,16.1952772 18.4104868,15.6043572 19.1400068,15.6043572 Z M15.6191268,15.6043572 C16.3477668,15.6043572 16.9395668,16.1952772 16.9395668,16.9243572 C16.9395668,17.6534372 16.3477668,18.2443572 15.6191268,18.2443572 C14.8904868,18.2443572 14.2991268,17.6534372 14.2991268,16.9243572 C14.2991268,16.1952772 14.8904868,15.6043572 15.6191268,15.6043572 Z M12.0995668,15.6043572 C12.8282068,15.6043572 13.4200068,16.1952772 13.4200068,16.9243572 C13.4200068,17.6534372 12.8282068,18.2443572 12.0995668,18.2443572 C11.3704868,18.2443572 10.7800068,17.6534372 10.7800068,16.9243572 C10.7800068,16.1952772 11.3704868,15.6043572 12.0995668,15.6043572 Z M8.57956683,15.6043572 C9.30864683,15.6043572 9.89956683,16.1952772 9.89956683,16.9243572 C9.89956683,17.6534372 9.30864683,18.2443572 8.57956683,18.2443572 C7.85048683,18.2443572 7.25912683,17.6534372 7.25912683,16.9243572 C7.25912683,16.1952772 7.85048683,15.6043572 8.57956683,15.6043572 Z M5.06000683,15.6043572 C5.78864683,15.6043572 6.37956683,16.1952772 6.37956683,16.9243572 C6.37956683,17.6534372 5.78864683,18.2443572 5.06000683,18.2443572 C4.33004683,18.2443572 3.73956683,17.6534372 3.73956683,16.9243572 C3.73956683,16.1952772 4.33004683,15.6043572 5.06000683,15.6043572 Z M26.1791268,12.0841812 C26.9086468,12.0841812 27.5000068,12.6755412 27.5000068,13.4041812 C27.5000068,14.1332612 26.9086468,14.7241812 26.1791268,14.7241812 C25.4504868,14.7241812 24.8600068,14.1332612 24.8600068,13.4041812 C24.8600068,12.6755412 25.4504868,12.0841812 26.1791268,12.0841812 Z M22.6591268,12.0841812 C23.3886468,12.0841812 23.9795668,12.6755412 23.9795668,13.4041812 C23.9795668,14.1332612 23.3886468,14.7241812 22.6591268,14.7241812 C21.9309268,14.7241812 21.3391268,14.1332612 21.3391268,13.4041812 C21.3391268,12.6755412 21.9309268,12.0841812 22.6591268,12.0841812 Z M19.1400068,12.0841812 C19.8682068,12.0841812 20.4595668,12.6755412 20.4595668,13.4041812 C20.4595668,14.1332612 19.8682068,14.7241812 19.1400068,14.7241812 C18.4104868,14.7241812 17.8195668,14.1332612 17.8195668,13.4041812 C17.8195668,12.6755412 18.4104868,12.0841812 19.1400068,12.0841812 Z M15.6191268,12.0841812 C16.3477668,12.0841812 16.9395668,12.6755412 16.9395668,13.4041812 C16.9395668,14.1332612 16.3477668,14.7241812 15.6191268,14.7241812 C14.8904868,14.7241812 14.2991268,14.1332612 14.2991268,13.4041812 C14.2991268,12.6755412 14.8904868,12.0841812 15.6191268,12.0841812 Z" id="Shape" fill-rule="nonzero" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.shape({
    inner: PropTypes.string,
    outer: PropTypes.string
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.TicketDay';

import React from 'react';

import { Svg,
  Path
} from 'react-primitives-svg';

import PropTypes from 'prop-types';

import { svgSize } from '../utils';

export default function Icon({ fill, height, width, ...rest }) {
  return (
    <Svg {...rest} {...svgSize(height, width)} viewBox="0 0 17 36" version="1.1" preserveAspectRatio="xMidYMid meet">
      <Path fill={fill} d="M13.846,0.991 C15.366,0.991 16.486,2.111 16.486,3.551 C16.566,4.271 16.246,4.751 15.846,5.391 L6.326,18.351 L15.766,31.072 C16.166,31.552 16.486,32.272 16.486,32.912 C16.486,34.352 15.366,35.552 13.926,35.552 C12.966,35.552 12.166,34.992 11.526,34.192 L0.965,20.431 C0.325,19.631 0.005,18.991 0.005,18.271 C0.005,17.471 0.325,16.911 0.965,16.111 L11.686,2.191 C12.166,1.471 12.886,0.991 13.846,0.991 Z" id="Shape" />
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Icon.displayName = 'Icons.ArrowLeft';

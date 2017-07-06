import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';


const StyledText = Text.extend`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

const H5 = ({ children, className }) => (
  <StyledText className={className}>{children.toUpperCase()}</StyledText>
);

H5.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default H5;

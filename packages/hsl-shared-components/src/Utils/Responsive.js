import React from 'react';
import PropTypes from 'prop-types';

const responsive = (ComponentToWrap) => {
  const ResponsiveComponent = ({ ...props }) => {
    const { screenSize } = this.context;
    return (
      <ComponentToWrap {...props} screenSize={screenSize} />
    );
  };

  ResponsiveComponent.contextTypes = {
    screenSize: PropTypes.string.isRequired
  };

  return ResponsiveComponent;
};

export default responsive;

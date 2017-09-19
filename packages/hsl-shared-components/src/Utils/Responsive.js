import React from 'react';
import PropTypes from 'prop-types';

const responsive = (ComponentToWrap) => {
  // eslint-disable-next-line react/prefer-stateless-function
  class ResponsiveComponent extends React.Component {
    render() {
      const { screenSize } = this.context;
      return (
        <ComponentToWrap {...this.props} screenSize={screenSize} />
      );
    }
  }

  ResponsiveComponent.contextTypes = {
    screenSize: PropTypes.string.isRequired
  };

  return ResponsiveComponent;
};

export default responsive;

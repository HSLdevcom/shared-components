import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import flow from 'lodash/fp/flow';
import omitBy from 'lodash/fp/omitBy';
import orderBy from 'lodash/fp/orderBy';
import findKey from 'lodash/fp/findKey';
import find from 'lodash/fp/find';
import head from 'lodash/fp/head';
import isUndefined from 'lodash/isUndefined';

function getScreenSize(width, props) {
  // Get sizes that are defined in props
  const sizes = omitBy((val, key) => (isUndefined(props[key])))(props.theme.sizes);
  // Try finding minWidth
  let minWidth = flow(
    orderBy(x => (x), 'desc'),
    find(x => (width >= x))
  )(sizes);
  if (!minWidth) {
    // no min width found
    // (example only large and medium props defined and screen width is 500xp)
    // Find the smallest defined size (in the example its medium)
    minWidth = flow(
    orderBy(x => (x), 'asc'),
    head()
  )(sizes);
  }

  return findKey(value => (value === minWidth))(sizes);
}

class Responsive extends React.Component {
  render() {
    const { width } = this.context;
    const screenSize = getScreenSize(width, this.props);
    return this.props[screenSize];
  }
}

Responsive.contextTypes = {
  width: PropTypes.number.isRequired
};

  /* eslint-disable react/no-unused-prop-types */
Responsive.propTypes = {
  xsmall: PropTypes.element,
  small: PropTypes.element,
  medium: PropTypes.element,
  large: PropTypes.element,
  xlarge: PropTypes.element,
  xxlarge: PropTypes.element,
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      xxlarge: PropTypes.number,
      xlarge: PropTypes.number,
      large: PropTypes.number,
      medium: PropTypes.number,
      small: PropTypes.number,
      xsmall: PropTypes.number,
    })
  })
};


export default withTheme(Responsive);

import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-primitives';
import { withTheme } from 'styled-components';
import orderBy from 'lodash/fp/orderBy';
import find from 'lodash/fp/find';
import findKey from 'lodash/fp/findKey';
import flow from 'lodash/fp/flow';
import debounce from 'lodash/fp/debounce';

function getScreenSize(width, sizes) {
  // order sizes from largest to smallest
  // find first size that's smaller (or equal) than given width
  const minWidth = flow(
    orderBy('asc'),
    find(x => (width >= x))
  )(sizes);
  // find key matching found minWidth
  return findKey(sizes, value => (value === minWidth));
}

class ResponsiveProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenSize: getScreenSize(Dimensions.get('window').width, this.props.theme.sizes) };
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  getChildContext() {
    return { screenSize: this.state.screenSize };
  }

  componentDidMount() {
    if (Dimensions.addEventListener) {
      Dimensions.addEventListener('change', this.onResize);
    }
  }

  componentWillUnmount() {
    if (Dimensions.removeEventListener) {
      Dimensions.removeEventListener('change', this.onResize);
    }
  }

  onResize({ window }) {
    this.setState({
      screenSize: getScreenSize(window.width, this.props.theme.sizes)
    });
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return React.children.only(this.props.children);
  }
}

ResponsiveProvider.childContextTypes = {
  screenSize: PropTypes.string
};

ResponsiveProvider.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      xxlarge: PropTypes.number,
      xlarge: PropTypes.number,
      large: PropTypes.number,
      medium: PropTypes.number,
      small: PropTypes.number,
      xsmall: PropTypes.number,
    })
  }),
  children: PropTypes.element.isRequired
};

export default withTheme(ResponsiveProvider);

import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-brimitives';
import debounce from 'lodash/debounce';

class ResponsiveProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width };
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  getChildContext() {
    return { width: this.state.width };
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
      width: window.width
    });
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return React.Children.only(this.props.children);
  }
}

ResponsiveProvider.childContextTypes = {
  width: PropTypes.number
};

ResponsiveProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default ResponsiveProvider;

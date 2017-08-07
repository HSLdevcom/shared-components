import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-primitives';
import { withTheme } from 'styled-components';

import View from '../View';
import { IS_NATIVE } from '../utils';

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, true);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, true);
  }

  onResize() {
    this.setState({
      width: Dimensions.get('window').width
    });
  }


  render() {
    return (IS_NATIVE || this.state.width <= this.props.theme.sizes.small) &&
    <View {...this.props} />;
  }
}

Mobile.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      small: PropTypes.number
    })
  })
};

Mobile.displayName = 'Mobile';

export default withTheme(Mobile);

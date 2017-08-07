import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-primitives';
import { withTheme } from 'styled-components';

import View from '../View';
import { IS_NATIVE } from '../utils';


class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width };
    this.onResize = this.onResize.bind(this);
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
    return (!IS_NATIVE && this.state.width > this.props.theme.sizes.small) &&
    <View {...this.props} />;
  }
}

Desktop.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      small: PropTypes.number
    })
  })
};

Desktop.displayName = 'Desktop';

export default withTheme(Desktop);

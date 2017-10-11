import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-brimitives';
import { withTheme } from 'styled-components';
import styled from 'styled-brimitives';
import omit from 'lodash/fp/omit';
import debounce from 'lodash/debounce';

import View from '../View';
import { IS_NATIVE } from '../utils';


class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width };
    this.onResize = debounce(this.onResize.bind(this), 200);
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
    <View {...omit(this.props, 'theme')} />;
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

export default styled(withTheme(Desktop))``;

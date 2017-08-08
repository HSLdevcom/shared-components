import React from 'react';
import { Dimensions } from 'react-primitives';


export default function(WrappedComponent) {
  return class extends React.Component {
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
      return <WrappedComponent width={this.state.width} {...this.props} />;
    }
  };
}

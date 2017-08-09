import React from 'react';
import { Dimensions } from 'react-primitives';


export default function(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      if (typeof WrappedComponent.styledComponentId !== 'string') {
        // Atm there is no isStyledComponent function available in styled components exposed api.
        // Using same method as the creators of styled components.
        // eslint-disable-next-line no-console
        console.warn(`
          ${WrappedComponent.displayName} is possibly not a styled component.
          Use only styled components.
        `);
      }
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
      // Dimensions has debounce in eventlistener, this may be called once after unmounting.
      if (!this.node) {
        return;
      }
      this.setState({
        width: window.width
      });
    }


    render() {
      return (
        <WrappedComponent
          innerRef={(x) => { this.node = x; }}
          width={this.state.width}
          {...this.props}
        />
      );
    }
  };
}

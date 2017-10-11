import React from 'react';
import { Dimensions } from 'react-brimitives';
import debounce from 'lodash/debounce';

/*
  You may encounter problems with components wrapped with Touchable.
  Example Button had this problem.
  When the components looks something like this:
  ({ ... }) => (
    <Touchable .... >
      <View .....
    </Touchable>
  )

  Remember to add innerRef prop for the component.

  ({ innerRef, .... }) => (
    <Touchable ....>
      <View innerRef={innerRef} ....
    </Touchable>
  )

*/

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
      // Dimensions has debounce in eventlistener, this may be called once after unmounting.
      if (!this.node) {
        return;
      }
      if (this.state.width === window.width) {
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

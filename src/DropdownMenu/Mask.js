import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';

const StyledDiv = Div.extend`
  background: black;
  opacity: 0.6;
  height: ${props => props.height}px;
`;

class Mask extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    // https://gist.github.com/Restuta/e400a555ba24daa396cc
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, true);
    this.setHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, true);
  }

  onResize() {
    this.setHeight();
  }

  setHeight() {
    if (!this.mask) {
      return;
    }
    this.setState({
      height: document.body.scrollHeight -
        this.mask.getBoundingClientRect().top -
        window.pageYOffset
    });
  }

  render() {
    /* eslint-disable no-return-assign */
    return (<StyledDiv
      className={this.props.className}
      height={this.state.height}
      innerRef={x => this.mask = x}
    />);
    /* eslint-enable no-return-assign */
  }
}

Mask.propTypes = {
  className: PropTypes.string,
};

export default styled(Mask)``;

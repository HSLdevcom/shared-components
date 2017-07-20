import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';

const Element = styled.View`
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line no-unused-vars
const View = styled(({ style, className, children, ...rest }) => (
  <Element style={style} className={className}>
    {children}
  </Element>
))``;

View.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.array  // eslint-disable-line react/forbid-prop-types
};

export default View;


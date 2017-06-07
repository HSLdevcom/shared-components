import React from 'react';
import cx from 'classnames';

const addClass = (element, newClass) => (
  React.cloneElement(element, { className: cx(element.props.className, newClass) })
);

// eslint-disable-next-line import/prefer-default-export
export { addClass };

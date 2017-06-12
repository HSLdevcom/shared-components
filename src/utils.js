import React from 'react';
import cx from 'classnames';


function addClassElement(element, newClass) {
  return React.cloneElement(element, { className: cx(element.props.className, newClass) });
}

function addClassChildren(elements, newClass) {
  return React.Children.map(elements, element => addClassElement(element, newClass));
}

const addClass = (element, newClass) => {
  if (React.isValidElement(element)) {
    return addClassElement(element, newClass);
  }
  return addClassChildren(element, newClass);
};

// eslint-disable-next-line import/prefer-default-export
export { addClass };

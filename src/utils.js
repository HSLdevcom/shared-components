import React from 'react';
import cx from 'classnames';
import { Platform } from 'react-primitives';
import { rem } from 'polished';

function isNative() {
  return Platform.OS !== 'web';
}

export { isNative };

// 14px font-size in mobile
// 16px font-size default web
export const NATIVE_RATIO = 14 / 16;


const pxStr = 'px';
/*
* Converts input to (size * NATIVE_RATIO) pixels in native and
* rem(size) in web. (16px = 1rem)
* @param {integer} fontSize - Size in pixels
* @return {string} px in native and rem in web
*/
function size(fontSize) {
  if (isNative()) {
    return (fontSize * NATIVE_RATIO) + pxStr;
  }
  return rem(fontSize + pxStr);
}

export { size };

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

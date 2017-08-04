import React from 'react';
import cx from 'classnames';
import { Platform } from 'react-primitives';
import { rem } from 'polished';

export function isNative() {
  return Platform.OS !== 'web';
}

// 14px font-size in mobile
// 16px font-size default web
export const NATIVE_RATIO = 14 / 16;


const pxString = 'px';
/*
* Converts input to (size * NATIVE_RATIO) pixels in native and
* rem(size) in web. (16px = 1rem)
* @param {integer} fontSize - Size in pixels
* @return {string} px in native and rem in web
*/
export function size(fontSize) {
  if (isNative()) {
    return (fontSize * NATIVE_RATIO) + pxString;
  }
  return rem(fontSize + pxString);
}

function addClassElement(element, newClass) {
  return React.cloneElement(element, { className: cx(element.props.className, newClass) });
}

function addClassChildren(elements, newClass) {
  return React.Children.map(elements, element => addClassElement(element, newClass));
}

export function addClass(element, newClass) {
  if (React.isValidElement(element)) {
    return addClassElement(element, newClass);
  }
  return addClassChildren(element, newClass);
}

/*
* Converts input to native or web depending on platform
* svgTranslate(12,34)
* Native: { translateX: '12', translateY: '34' }
* Web: { transform: 'translate(12,34)' }
*/
export function svgTranslate(x, y) {
  return isNative() ? { translateX: `${x || 0}`, translateY: `${y || 0}` } :
  { transform: `translate(${x || 0},${y || 0})` };
}

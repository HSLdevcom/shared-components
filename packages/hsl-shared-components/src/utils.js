import React from 'react';
import cx from 'classnames';
import { Platform } from 'react-primitives';
import { rem } from 'polished';

import { Desktop, Mobile, WindowSize } from './Utils/';

export { Desktop, Mobile, WindowSize };

export const IS_NATIVE = Platform.OS !== 'web';

// 14px font-size in mobile
// 16px font-size default web
export const NATIVE_RATIO = 14 / 16;


const pxString = 'px';
/**
* Converts input to (size * NATIVE_RATIO) pixels in native and
* rem(size) in web. (16px = 1rem)
* @param {integer} fontSize - Size in pixels
* @param {boolean} asNumeric (optional) – Return pixel value without units if not set.
* @return {string} px in native, rem in web or pixel value without unit if asNumeric-flag is set
*/
export function size(fontSize, asNumeric = false) {
  if (IS_NATIVE) {
    const calculatedSize = (fontSize * NATIVE_RATIO);
    return asNumeric ? calculatedSize : calculatedSize + pxString;
  }
  return asNumeric ? fontSize : rem(fontSize + pxString);
}

/**
* Get styled componenets compatible lineheight-value relative to font size
* @param {integer} fontSize - Size in pixels
* @param {integer} relativeLineHeight - Relative line height in CSS-style units e.g 1.25 === 125%
* @return {integer} relative line height in pixels
*/
export function relativeLineHeight(fontSize, relativeValue = 1.00) {
  return Math.round(size((20 * relativeValue), true));
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
  return IS_NATIVE ? { translateX: `${x || 0}`, translateY: `${y || 0}` } :
  { transform: `translate(${x || 0},${y || 0})` };
}
 /*
 * Convert size to web or native depending on platform.
 * Firefox (and perhaps some other browsers) don't work
 * when defining height/width like this: <svg height="2rem" .. />
 * but native works that way.
 * svgSize(12,34)
 * Native: { height: 12, width: 34 }
 * Web: { style: { height: 12, width: 34 } }
 */
export function svgSize(height, width) {
  return IS_NATIVE ? { height, width } : { style: { height, width } };
}

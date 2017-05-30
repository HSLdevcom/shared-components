import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, color, number } from '@kadira/storybook-addon-knobs';

import { ArrowDown, ArrowLeft, Checkmark, Logo, HSLLogo, JourneyPlanner, Latest, More, Search, SignIn, Tickets, TravelCard } from '../src/Icons';

setAddon(JSXAddon);

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('ArrowDown', () => {
  const fill = color('Fill', '#007ac9');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<ArrowDown fill={fill} height={`${height}em`} />);
}, { displayName: 'ArrowDown' });

stories.addWithJSX('ArrowLeft', () => {
  const fill = color('Fill', '#007ac9');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<ArrowLeft fill={fill} height={`${height}em`} />);
}, { displayName: 'ArrowLeft' });

stories.addWithJSX('Checkmark', () => {
  const fillInner = color('FillInner', '#fff');
  const fillOuter = color('FillOuter', '#00c920');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Checkmark fillSecond={fillOuter} fill={fillInner} height={`${height}em`} />);
}, { displayName: 'Checkmark' });

stories.addWithJSX('Logo', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Logo fill={fill} height={`${height}em`} />);
}, { displayName: 'Logo' });

stories.addWithJSX('HSLLogo', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<HSLLogo fill={fill} height={`${height}em`} />);
}, { displayName: 'HSLLogo' });
stories.addWithJSX('JourneyPlanner', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<JourneyPlanner fill={fill} height={`${height}em`} />);
}, { displayName: 'JourneyPlanner' });
stories.addWithJSX('Latest', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Latest fill={fill} height={`${height}em`} />);
}, { displayName: 'Latest' });
stories.addWithJSX('More', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<More fill={fill} height={`${height}em`} />);
}, { displayName: 'More' });
stories.addWithJSX('Search', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Search fill={fill} height={`${height}em`} />);
}, { displayName: 'Search' });
stories.addWithJSX('SignIn', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<SignIn fill={fill} height={`${height}em`} />);
}, { displayName: 'SignIn' });
stories.addWithJSX('Tickets', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Tickets fill={fill} height={`${height}em`} />);
}, { displayName: 'Tickets' });
stories.addWithJSX('TravelCard', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<TravelCard fill={fill} height={`${height}em`} />);
}, { displayName: 'TravelCard' });

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, color, number } from '@kadira/storybook-addon-knobs';

import { ArrowDown, Checkmark } from '../src/Icons';

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
  return (<Checkmark fillOuter={fillOuter} fillInner={fillInner} height={`${height}em`} />);
}, { displayName: 'Checkmark' });

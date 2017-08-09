import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import { Icons } from 'hsl-shared-components';

setAddon(JSXAddon);

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('AddCard', () => {
  const fill = {
    inner: color('FillInner', '#888'),
    outer: color('FillOuter', '#007ac9')
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.AddCard fill={fill} height={`${height}em`} />);
}, { displayName: 'AddCard' });

stories.addWithJSX('Alert', () => {
  const fill = '#dc4501';
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Alert fill={fill} height={`${height}em`} />);
}, { displayName: 'Alert' });

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
  return (<Icons.ArrowDown fill={fill} height={`${height}em`} />);
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
  return (<Icons.ArrowLeft fill={fill} height={`${height}em`} />);
}, { displayName: 'ArrowLeft' });

stories.addWithJSX('CardOrder', () => {
  const fill = {
    inner: color('FillInner', '#888'),
    outer: color('FillOuter', '#007ac9')
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CardOrder fill={fill} height={`${height}em`} />);
}, { displayName: 'CardOrder' });

stories.addWithJSX('CardWithCheckmark', () => {
  const fill = {
    inner: color('FillInner', '#888'),
    outer: color('FillOuter', '#64BE14')
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CardWithCheckmark fill={fill} height={`${height}em`} />);
}, { displayName: 'CardWithCheckmark' });

stories.addWithJSX('Checkmark', () => {
  const fill = {
    inner: color('FillInner', '#fff'),
    outer: color('FillOuter', '#00c920')
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Checkmark fill={fill} height={`${height}em`} />);
}, { displayName: 'Checkmark' });

stories.addWithJSX('Cog', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Cog fill={fill} height={`${height}em`} />);
}, { displayName: 'Cog' });

stories.addWithJSX('Cross', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Cross fill={fill} height={`${height}em`} />);
}, { displayName: 'Cross' });

stories.addWithJSX('Edit', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Edit fill={fill} height={`${height}em`} />);
}, { displayName: 'Edit' });

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
  return (<Icons.Logo fill={fill} height={`${height}em`} />);
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
  return (<Icons.HSLLogo fill={fill} height={`${height}em`} />);
}, { displayName: 'HSLLogo' });

stories.addWithJSX('Info', () => {
  const fill = color('Fill', '#007ac9');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Info fill={fill} height={`${height}em`} />);
}, { displayName: 'Info' });

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
  return (<Icons.JourneyPlanner fill={fill} height={`${height}em`} />);
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
  return (<Icons.Latest fill={fill} height={`${height}em`} />);
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
  return (<Icons.More fill={fill} height={`${height}em`} />);
}, { displayName: 'More' });

stories.addWithJSX('Menu', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Menu fill={fill} height={`${height}em`} />);
}, { displayName: 'Menu' });

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
  return (<Icons.Search fill={fill} height={`${height}em`} />);
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
  return (<Icons.SignIn fill={fill} height={`${height}em`} />);
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
  return (<Icons.Tickets fill={fill} height={`${height}em`} />);
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
  return (<Icons.TravelCard fill={fill} height={`${height}em`} />);
}, { displayName: 'TravelCard' });
stories.addWithJSX('PositionAlert', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.PositionAlert height={`${height}em`} />);
}, { displayName: 'PositionAlert' });

stories.addWithJSX('Facebook', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Facebook fill={fill} height={`${height}em`} />);
}, { displayName: 'Facebook' });
stories.addWithJSX('Twitter', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Twitter fill={fill} height={`${height}em`} />);
}, { displayName: 'Twitter' });
stories.addWithJSX('Instagram', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Instagram fill={fill} height={`${height}em`} />);
}, { displayName: 'Instagram' });
stories.addWithJSX('Youtube', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Youtube fill={fill} height={`${height}em`} />);
}, { displayName: 'Youtube' });
stories.addWithJSX('Linkedin', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Linkedin fill={fill} height={`${height}em`} />);
}, { displayName: 'Linkedin' });

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
  return (<Icons.AddCard fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Alert fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.ArrowDown fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.ArrowLeft fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.CardOrder fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.CardWithCheckmark fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Checkmark', () => {
  const fill = color('FillOuter', '#00c920');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Checkmark fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('CircleCheckmark', () => {
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
<<<<<<< HEAD
  return (<Icons.CircleCheckmark fill={fill} height={`${height}em`} />);
=======
  return (<Icons.Checkmark fill={fill} height={`${height}rem`} />);
>>>>>>> SVGinFirefox
});

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
  return (<Icons.Cog fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Cross fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CustomerService', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CustomerService fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Edit fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Logo fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.HSLLogo fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Info fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.JourneyPlanner fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Latest fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.More fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Menu fill={fill} height={`${height}rem`} />);
});

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
  return (<Icons.Search fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.SignIn fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Tickets fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.TravelCard fill={fill} height={`${height}rem`} />);
});
stories.addWithJSX('PositionAlert', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.PositionAlert height={`${height}rem`} />);
});

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
  return (<Icons.Facebook fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Twitter fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Instagram fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Youtube fill={fill} height={`${height}rem`} />);
});
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
  return (<Icons.Linkedin fill={fill} height={`${height}rem`} />);
});
stories.addWithJSX('Bike', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Bike fill={fill} height={`${height}rem`} />);
});
stories.addWithJSX('MobileTicket', () => {
  const fill = color('fill', '#d1d1d1');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.MobileTicket fill={fill} height={`${height}rem`} />);
});

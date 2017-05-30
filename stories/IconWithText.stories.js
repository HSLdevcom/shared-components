import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, color, number, text, select } from '@kadira/storybook-addon-knobs';

import IconWithText from '../src/IconWithText/IconWithText';
import { ArrowDown, ArrowLeft, Checkmark, Logo, HSLLogo, JourneyPlanner, Latest, More, Search, SignIn, Tickets, TravelCard } from '../src/Icons';

const iconMap = {
  ArrowDown: <ArrowDown />,
  ArrowLeft: <ArrowLeft />,
  Logo: <Logo />,
  HSLLogo: <HSLLogo />,
  JourneyPlanner: <JourneyPlanner />,
  Latest: <Latest />,
  More: <More />,
  Search: <Search />,
  SignIn: <SignIn />,
  Tickets: <Tickets />,
  TravelCard: <TravelCard />,
};

const iconList = {
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  Logo: 'Logo',
  HSLLogo: 'HSLLogo',
  JourneyPlanner: 'JourneyPlanner',
  Latest: 'Latest',
  More: 'More',
  Search: 'Search',
  SignIn: 'SignIn',
  Tickets: 'Tickets',
  TravelCard: 'TravelCard'
};

setAddon(JSXAddon);

const stories = storiesOf('IconWithText', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
  const btnColor = color('Color', '#007ac9');
  const fill = color('Fill', '#3490C2');
  const background = color('Background', '#ffffff');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const icon = select('Icon', iconList, 'TravelCard');
  const height = number('Height', defaultValue, options);
  const sampleText = text('Text', 'Sample text');

  const textPositions = {
    Right: 'Right',
    Bottom: 'Bottom',
  };
  const textPos = select('Text position', textPositions, 'Bottom');
  return (<IconWithText
    icon={iconMap[icon]}
    text={sampleText}
    textPosition={textPos}
    color={btnColor}
    fill={fill}
    background={background}
    height={`${height}em`}
  />);
});

stories.addWithJSX('with inner & outer fill', () => {
  const btnColor = color('Color', '#007ac9');
  const fill = {
    inner: color('Fill', '#3490C2'),
    outer: color('Second fill', '#DA273F')
  };
  const background = color('Background', '#ffffff');
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  const sampleText = text('Text', 'Sample text');

  const textPositions = {
    Right: 'Right',
    Bottom: 'Bottom',
  };
  const textPos = select('Text position', textPositions, 'Bottom');
  const icon = <Checkmark />;
  return (<IconWithText
    icon={icon}
    text={sampleText}
    textPosition={textPos}
    color={btnColor}
    fill={fill}
    background={background}
    height={`${height}em`}
  />);
});

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, color, number, text, select } from '@storybook/addon-knobs';

import { IconWithText, Icons } from 'hsl-shared-components';

const iconMap = {
  ArrowDown: <Icons.ArrowDown height="4rem" />,
  ArrowLeft: <Icons.ArrowLeft height="4rem" />,
  Logo: <Icons.Logo height="4rem" />,
  HSLLogo: <Icons.HSLLogo height="4rem" />,
  Cross: <Icons.Cross height="4rem" />,
  JourneyPlanner: <Icons.JourneyPlanner height="4rem" />,
  Latest: <Icons.Latest height="4rem" />,
  More: <Icons.More height="4rem" />,
  Menu: <Icons.Menu height="4rem" />,
  Search: <Icons.Search height="4rem" />,
  SignIn: <Icons.SignIn height="4rem" />,
  Tickets: <Icons.Tickets height="4rem" />,
  TravelCard: <Icons.TravelCard height="4rem" />,
};

const iconList = {
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  Logo: 'Logo',
  HSLLogo: 'HSLLogo',
  Cross: 'Cross',
  JourneyPlanner: 'JourneyPlanner',
  Latest: 'Latest',
  More: 'More',
  Menu: 'Menu',
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
  const StyledIWT = IconWithText.extend`
    color: ${btnColor};
    background: ${background};
    svg {
      height: ${height}em;
    }
  `;
  return (<StyledIWT
    icon={iconMap[icon]}
    text={sampleText}
    textPosition={textPos}
  />);
});

stories.addWithJSX('with inner & outer fill', () => {
  const btnColor = color('Color', '#007ac9');
  const fill = {
    inner: color('Inner fill', '#3490C2'),
    outer: color('Outer fill', '#DA273F')
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
  const icon = <Icons.Checkmark height="4rem" fill={fill} />;
  const StyledIWT = IconWithText.extend`
    color: ${btnColor};
    background: ${background};
    svg {
      height: ${height}em;
    }
  `;
  return (<StyledIWT
    icon={icon}
    text={sampleText}
    textPosition={textPos}
  />);
});

stories.addWithJSX('text & svg in text prop', () => {
  const btnColor = color('Color', '#007ac9');
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
  const StyledIWT = IconWithText.extend`
    color: ${btnColor};
    background: ${background};
    .icon svg {
      height: ${height}em;
    }
    svg {
      fill: currentColor;
    }
  `;
  const textProp = <span>{sampleText}<Icons.ArrowDown height="0.75rem" /></span>;
  return (<StyledIWT
    icon={iconMap[icon]}
    text={textProp}
    textPosition={textPos}
  />);
});

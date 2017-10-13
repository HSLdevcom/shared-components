import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import { Icons, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const defaultFillGrey = Theme.colors.primary.hslGrey;
const defaultFillBlue = Theme.colors.primary.hslBlue;
const defaultFillWhite = Theme.colors.primary.hslWhite;
const defaultFillGreen = Theme.colors.secondary.hslGreen;
const defaultFillGreyDark = Theme.colors.primary.hslGreyDark;

const defaultSize = 10;
const defaultSizeOptions = {
  range: true,
  min: 0.1,
  max: 20,
  step: 0.1,
};

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('AddCard', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFillBlue)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.AddCard fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Alert', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Alert height={`${height}rem`} />);
});

stories.addWithJSX('ArrowDown', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.ArrowDown fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('ArrowLeft', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.ArrowLeft fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('ArrowRight', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.ArrowRight fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Bike', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Bike fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('BikeCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.BikeCircle height={`${height}rem`} />);
});

stories.addWithJSX('BikeRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.BikeRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Bus', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Bus fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('BusCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.BusCircle height={`${height}rem`} />);
});

stories.addWithJSX('BusRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.BusRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Briefcase', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Briefcase fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Calendar', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFillGreyDark)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Calendar fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CardOrder', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFillBlue)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.CardOrder fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CardWithCheckmark', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFillGreen)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.CardWithCheckmark fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Chat', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Chat fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Checkmark', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Checkmark fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('CircleCheckmark', () => {
  const fill = {
    inner: color('FillInner', '#fff'),
    outer: color('FillOuter', defaultFillGreen)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.CircleCheckmark fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Cog', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Cog fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Cross', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Cross fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CustomerService', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.CustomerService fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Edit', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Edit fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Envelope', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Envelope fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Facebook', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Facebook fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Ferry', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Ferry fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('FerryCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.FerryCircle height={`${height}rem`} />);
});

stories.addWithJSX('FerryRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.FerryRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Fines', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFillGreyDark)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Fines fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('HSLLogo', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.HSLLogo fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('HSLLogoNoText', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.HSLLogoNoText fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Info', () => {
  const fill = color('Fill', defaultFillBlue);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Info fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Instagram', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Instagram fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('JourneyPlanner', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.JourneyPlanner fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Latest', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Latest fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Linkedin', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Linkedin fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('LostProperty', () => {
  const fill = color('fill', defaultFillGrey);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.LostProperty fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Menu', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Menu fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('MobileTicket', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.MobileTicket fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('More', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 2;
  const height = number('Height', defaultValue, defaultSizeOptions);
  return (<Icons.More fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('PhoneWithLogo', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.PhoneWithLogo fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('PositionAlert', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.PositionAlert height={`${height}rem`} />);
});

stories.addWithJSX('Rail', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Rail fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('RailCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.RailCircle height={`${height}rem`} />);
});

stories.addWithJSX('RailRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.RailRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Search', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Search fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('SignIn', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.SignIn fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Star', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Star fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Subway', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Subway fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('SubwayCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.SubwayCircle height={`${height}rem`} />);
});

stories.addWithJSX('SubwayRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.SubwayRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Tickets', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Tickets fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('TicketsDay', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFillGreyDark)
  };
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.TicketsDay fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Tram', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Tram fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('TramCircle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.TramCircle height={`${height}rem`} />);
});

stories.addWithJSX('TramRectangle', () => {
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.TramRectangle height={`${height}rem`} />);
});

stories.addWithJSX('TravelCard', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.TravelCard fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Twitter', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Twitter fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Youtube', () => {
  const fill = color('fill', defaultFillGreyDark);
  const height = number('Height', defaultSize, defaultSizeOptions);
  return (<Icons.Youtube fill={fill} height={`${height}rem`} />);
});
